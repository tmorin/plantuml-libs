const A = require("assert").strict
const F = require("fs")
const P = require("path")
const HTTP = require("http")
const Fx = require("fs-extra").promises

require("ts-node/register")
const { download } = require("../source/generator/workdir/archive")

const TMP_DIR = P.resolve(".tmp/archive-spec")

const context = { info() {}, debug() {}, warn() {}, error() {} }

describe("workdir/archive download", function () {
  let server
  let baseUrl

  before(async function () {
    server = HTTP.createServer((req, res) => {
      if (req.url === "/ok.zip") {
        res.writeHead(200)
        res.end("zip-content")
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
    await Fx.rm(TMP_DIR, { recursive: true, force: true })
  })

  it("should write the body of a 2xx response", async function () {
    const zipFile = P.join(TMP_DIR, "ok.zip")
    await download(context, `${baseUrl}/ok.zip`, zipFile)
    A.equal(F.readFileSync(zipFile, "utf8"), "zip-content")
    A.equal(F.existsSync(`${zipFile}.part`), false)
  })

  for (const [name, path, message] of [
    ["a 404 response", "/missing.zip", /404/],
    ["a 500 response", "/error.zip", /500/],
    ["a 200 response with an empty body", "/empty.zip", /empty response body/],
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
    F.writeFileSync(zipFile, "cached")
    await download(context, `${baseUrl}/missing.zip`, zipFile)
    A.equal(F.readFileSync(zipFile, "utf8"), "cached")
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
