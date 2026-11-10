const A = require("assert").strict
const F = require("fs")
const P = require("path")
const HTTP = require("http")
const Fx = require("fs-extra").promises

require("ts-node/register")
const ZLIB = require("zlib")
const {
  download,
  extractArchive,
} = require("../source/generator/workdir/archive")

const TMP_DIR = P.resolve(".tmp/archive-spec")

const context = { info() {}, debug() {}, warn() {}, error() {} }

// builds a real zip (stored entries, no compression) without any dependency
function buildZip(entries) {
  const locals = []
  const centrals = []
  let offset = 0
  for (const [name, content] of Object.entries(entries)) {
    const nameBuf = Buffer.from(name)
    const data = Buffer.from(content)
    const crc = ZLIB.crc32(data)
    const local = Buffer.alloc(30)
    local.writeUInt32LE(0x04034b50, 0)
    local.writeUInt16LE(20, 4)
    local.writeUInt32LE(crc, 14)
    local.writeUInt32LE(data.length, 18)
    local.writeUInt32LE(data.length, 22)
    local.writeUInt16LE(nameBuf.length, 26)
    const central = Buffer.alloc(46)
    central.writeUInt32LE(0x02014b50, 0)
    central.writeUInt16LE(20, 4)
    central.writeUInt16LE(20, 6)
    central.writeUInt32LE(crc, 16)
    central.writeUInt32LE(data.length, 20)
    central.writeUInt32LE(data.length, 24)
    central.writeUInt16LE(nameBuf.length, 28)
    central.writeUInt32LE((0o100644 << 16) >>> 0, 38)
    central.writeUInt32LE(offset, 42)
    locals.push(local, nameBuf, data)
    centrals.push(central, nameBuf)
    offset += local.length + nameBuf.length + data.length
  }
  const centralDir = Buffer.concat(centrals)
  const end = Buffer.alloc(22)
  end.writeUInt32LE(0x06054b50, 0)
  end.writeUInt16LE(Object.keys(entries).length, 8)
  end.writeUInt16LE(Object.keys(entries).length, 10)
  end.writeUInt32LE(centralDir.length, 12)
  end.writeUInt32LE(offset, 16)
  return Buffer.concat([...locals, centralDir, end])
}

const ENTRIES = { "a.txt": "first", "dir/b.txt": "second" }
const ZIP = buildZip(ENTRIES)
// a valid header, but the central directory and the end record are missing
const TRUNCATED_ZIP = ZIP.subarray(0, ZIP.length - 60)

describe("workdir/archive download", function () {
  let server
  let baseUrl
  let hits

  before(async function () {
    server = HTTP.createServer((req, res) => {
      hits.push(req.url)
      if (req.url === "/ok.zip") {
        res.writeHead(200)
        res.end(ZIP)
      } else if (req.url === "/html.zip") {
        res.writeHead(200, { "Content-Type": "application/zip" })
        res.end("<html>sign in to download</html>")
      } else if (req.url === "/empty-archive.zip") {
        res.writeHead(200)
        res.end(Buffer.from([0x50, 0x4b, 0x05, 0x06, 0, 0, 0, 0]))
      } else if (req.url === "/empty.zip") {
        res.writeHead(200)
        res.end()
      } else {
        res.writeHead(req.url === "/error.zip" ? 500 : 404)
        res.end("<html>not the archive you are looking for</html>")
      }
    })
    await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve))
    baseUrl = `http://127.0.0.1:${server.address().port}`
  })

  after(async function () {
    await new Promise((resolve) => server.close(resolve))
  })

  beforeEach(async function () {
    hits = []
    await Fx.rm(TMP_DIR, { recursive: true, force: true })
  })

  it("should write the body of a 2xx response", async function () {
    const zipFile = P.join(TMP_DIR, "ok.zip")
    await download(context, `${baseUrl}/ok.zip`, zipFile)
    A.deepEqual(F.readFileSync(zipFile), ZIP)
    A.equal(F.existsSync(`${zipFile}.part`), false)
  })

  for (const [name, path, message] of [
    ["a 404 response", "/missing.zip", /404/],
    ["a 500 response", "/error.zip", /500/],
    ["a 200 response with an empty body", "/empty.zip", /empty response body/],
    [
      "a 200 response whose body is not a zip",
      "/html.zip",
      /not a zip.*\/html\.zip/,
    ],
    [
      "a 200 response whose body is an empty zip",
      "/empty-archive.zip",
      /not a zip.*\/empty-archive\.zip/,
    ],
  ]) {
    it(`should reject ${name} and leave no file behind`, async function () {
      const zipFile = P.join(TMP_DIR, "bad.zip")
      await A.rejects(download(context, `${baseUrl}${path}`, zipFile), message)
      A.equal(F.existsSync(zipFile), false)
      A.equal(F.existsSync(`${zipFile}.part`), false)
    })
  }

  it("should not fetch again when the archive is already cached", async function () {
    const zipFile = P.join(TMP_DIR, "cached.zip")
    F.mkdirSync(TMP_DIR, { recursive: true })
    F.writeFileSync(zipFile, ZIP)
    await download(context, `${baseUrl}/missing.zip`, zipFile)
    A.deepEqual(F.readFileSync(zipFile), ZIP)
    A.deepEqual(hits, [])
  })

  it("should discard a cached file that is not a zip and fetch it again", async function () {
    const zipFile = P.join(TMP_DIR, "poisoned.zip")
    F.mkdirSync(TMP_DIR, { recursive: true })
    F.writeFileSync(zipFile, "<html>sign in to download</html>")
    await download(context, `${baseUrl}/ok.zip`, zipFile)
    A.deepEqual(F.readFileSync(zipFile), ZIP)
    A.equal(F.existsSync(`${zipFile}.part`), false)
    A.deepEqual(hits, ["/ok.zip"])
  })

  it("should leave no file when a cached non-zip file cannot be fetched again", async function () {
    const zipFile = P.join(TMP_DIR, "poisoned.zip")
    F.mkdirSync(TMP_DIR, { recursive: true })
    F.writeFileSync(zipFile, "cached")
    await A.rejects(
      download(context, `${baseUrl}/html.zip`, zipFile),
      /not a zip/,
    )
    A.equal(F.existsSync(zipFile), false)
    A.equal(F.existsSync(`${zipFile}.part`), false)
  })
})

describe("workdir/archive extractArchive", function () {
  const zipFile = P.join(TMP_DIR, "icons.zip")
  const destDir = P.join(TMP_DIR, "icons")

  beforeEach(async function () {
    await Fx.rm(TMP_DIR, { recursive: true, force: true })
    F.mkdirSync(TMP_DIR, { recursive: true })
  })

  it("should extract a complete archive", async function () {
    F.writeFileSync(zipFile, ZIP)
    await extractArchive(context, zipFile, destDir)
    A.equal(F.readFileSync(P.join(destDir, "a.txt"), "utf8"), "first")
    A.equal(F.readFileSync(P.join(destDir, "dir", "b.txt"), "utf8"), "second")
    A.equal(F.existsSync(`${destDir}.part`), false)
  })

  it("should leave no directory when the extraction fails, then extract a good archive", async function () {
    F.writeFileSync(zipFile, TRUNCATED_ZIP)
    await A.rejects(extractArchive(context, zipFile, destDir))
    A.equal(F.existsSync(destDir), false)
    A.equal(F.existsSync(`${destDir}.part`), false)
    F.writeFileSync(zipFile, ZIP)
    await extractArchive(context, zipFile, destDir)
    A.equal(F.readFileSync(P.join(destDir, "dir", "b.txt"), "utf8"), "second")
  })

  it("should clear a stale part directory left by a killed run", async function () {
    F.writeFileSync(zipFile, ZIP)
    F.mkdirSync(`${destDir}.part`, { recursive: true })
    F.writeFileSync(P.join(`${destDir}.part`, "stale.txt"), "stale")
    await extractArchive(context, zipFile, destDir)
    A.equal(F.existsSync(`${destDir}.part`), false)
    A.equal(F.existsSync(P.join(destDir, "stale.txt")), false)
    A.equal(F.readFileSync(P.join(destDir, "a.txt"), "utf8"), "first")
  })

  it("should not extract again when the directory is complete", async function () {
    F.writeFileSync(zipFile, ZIP)
    await extractArchive(context, zipFile, destDir)
    F.writeFileSync(P.join(destDir, "sentinel.txt"), "kept")
    await extractArchive(context, zipFile, destDir)
    A.equal(F.readFileSync(P.join(destDir, "sentinel.txt"), "utf8"), "kept")
  })
})

describe("workdir generator exit code", function () {
  it("should exit non-zero when the generation fails", async function () {
    this.timeout(120000)
    const CP = require("child_process")
    // a working directory that is a regular file makes copyTemplates fail
    // before any package factory (hence any network access) runs
    const result = CP.spawnSync(
      process.execPath,
      [
        "-r",
        "ts-node/register",
        "source/generator/workdir",
        "-w",
        "package.json",
      ],
      { encoding: "utf8" },
    )
    A.match(result.stderr, /generation failed/)
    A.notEqual(result.status, 0)
  })
})
