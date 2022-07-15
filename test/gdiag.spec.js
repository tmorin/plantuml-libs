const A = require("assert").strict
const F = require("fs")
const P = require("path")
const Fx = require("fs-extra").promises
const CP = require("child_process")
const U = require("util")

async function cleanup() {
  await Fx.rm(".tmp", { recursive: true, force: true })
  await Fx.mkdir(".tmp/wd", { recursive: true })
  await Fx.copyFile(P.join(__dirname, "src1.puml"), ".tmp/wd/src1.puml")
  await Fx.copyFile(P.join(__dirname, "src2.puml"), ".tmp/wd/src2.puml")
  await Fx.mkdir(".tmp/td", { recursive: true })
  await Fx.copyFile(
    P.join(__dirname, "plantuml-1.2022.6.jar"),
    ".tmp/td/plantuml-1.2022.6.jar"
  )
}

async function executeGdiag(...args) {
  CP.spawnSync(
    process.execPath,
    ["bin/gdiag.js", "--wd=.tmp/wd", "--td=.tmp/td", ...args],
    {
      stdio: "inherit",
    }
  )
  await U.promisify(setTimeout)(100)
}

describe("gdiag", () => {
  beforeEach(async function () {
    await cleanup()
  })

  it("should not render missing diagrams", async function () {
    this.timeout(100000)

    await executeGdiag()
    A.equal(F.existsSync(".tmp/wd/src1-diag1.png"), true)
    A.equal(F.existsSync(".tmp/wd/src2-diag1.png"), true)

    await Fx.rm(".tmp/wd/src1-diag1.png", { force: true })
    await U.promisify(setTimeout)(200)

    await executeGdiag()
    A.equal(F.existsSync(".tmp/wd/src1-diag1.png"), false)
    A.equal(F.existsSync(".tmp/wd/src2-diag1.png"), true)
  })

  it("should render updated sources", async function () {
    this.timeout(100000)

    await executeGdiag()
    A.equal(F.existsSync(".tmp/wd/src1-diag1.png"), true)
    A.equal(F.existsSync(".tmp/wd/src2-diag1.png"), true)

    const src1BeforeState = await Fx.stat(".tmp/wd/src1-diag1.png")
    const src2BeforeState = await Fx.stat(".tmp/wd/src2-diag1.png")

    // update src1
    await Fx.utimes(".tmp/wd/src1.puml", Date.now(), Date.now())

    await executeGdiag()

    const src1AfterState = await Fx.stat(".tmp/wd/src1-diag1.png")
    const src2AfterState = await Fx.stat(".tmp/wd/src2-diag1.png")

    A.notEqual(src1AfterState.mtime.getTime(), src1BeforeState.mtime.getTime())
    A.equal(src2AfterState.mtime.getTime(), src2BeforeState.mtime.getTime())
  })

  it("should clean before render", async function () {
    this.timeout(100000)

    await executeGdiag()
    A.equal(F.existsSync(".tmp/wd/src1-diag1.png"), true)
    A.equal(F.existsSync(".tmp/wd/src2-diag1.png"), true)

    const src1BeforeState = await Fx.stat(".tmp/wd/src1-diag1.png")
    const src2BeforeState = await Fx.stat(".tmp/wd/src2-diag1.png")

    await executeGdiag("-c")
    await U.promisify(setTimeout)(200)

    const src1AfterState = await Fx.stat(".tmp/wd/src1-diag1.png")
    const src2AfterState = await Fx.stat(".tmp/wd/src2-diag1.png")

    A.notEqual(src1AfterState.mtime.getTime(), src1BeforeState.mtime.getTime())
    A.notEqual(src2AfterState.mtime.getTime(), src2BeforeState.mtime.getTime())
  })
})
