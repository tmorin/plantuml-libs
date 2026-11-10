const A = require("assert").strict
const P = require("path")
const Fe = require("fs-extra")

require("ts-node/register")
const { validatePackage } = require("../source/generator/workdir/validation")

const TMP_DIR = P.resolve(".tmp/workdir-validation-spec")

function item(urn, icon) {
  return { urn, icon, elements: [] }
}

function pkg(modules, examples) {
  return { urn: "test/pkg", modules, examples }
}

describe("workdir/validation validatePackage", function () {
  beforeEach(async function () {
    await Fe.remove(TMP_DIR)
    await Fe.ensureDir(TMP_DIR)
    await Fe.writeFile(P.join(TMP_DIR, "present.tera"), "template")
  })

  after(async function () {
    await Fe.remove(TMP_DIR)
  })

  it("should pass a valid package", async function () {
    const p = pkg(
      [
        {
          urn: "test/pkg/m1",
          items: [
            item("test/pkg/m1/a", { type: "Source", source: "a.svg" }),
            item("test/pkg/m1/b", { type: "Reference", urn: "test/pkg/m1/a" }),
          ],
        },
      ],
      [{ name: "ex", template: "present.tera" }],
    )
    A.doesNotThrow(() => validatePackage(p, TMP_DIR))
  })

  it("should throw naming the package and the missing template", async function () {
    const p = pkg([], [{ name: "ex", template: "missing.tera" }])
    A.throws(
      () => validatePackage(p, TMP_DIR),
      (err) => {
        A.ok(err.message.startsWith('invalid package "test/pkg":'))
        A.ok(
          err.message.includes(
            `example "ex": template "missing.tera" not found in ${TMP_DIR}`,
          ),
        )
        return true
      },
    )
  })

  it("should throw naming the package and the dangling reference", async function () {
    const p = pkg(
      [
        {
          urn: "test/pkg/m1",
          items: [item("test/pkg/m1/b", { type: "Reference", urn: "nope/x" })],
        },
      ],
      [],
    )
    A.throws(
      () => validatePackage(p, TMP_DIR),
      (err) => {
        A.ok(err.message.startsWith('invalid package "test/pkg":'))
        A.ok(
          err.message.includes(
            'item "test/pkg/m1/b": icon reference "nope/x" matches no item of the package',
          ),
        )
        return true
      },
    )
  })

  it("should report both faults in one message with two lines", async function () {
    const p = pkg(
      [
        {
          urn: "test/pkg/m1",
          items: [item("test/pkg/m1/b", { type: "Reference", urn: "nope/x" })],
        },
      ],
      [{ name: "ex", template: "missing.tera" }],
    )
    A.throws(
      () => validatePackage(p, TMP_DIR),
      (err) => {
        const lines = err.message.split("\n")
        A.equal(lines.length, 3)
        A.equal(lines[0], 'invalid package "test/pkg":')
        A.ok(lines[1].includes('template "missing.tera"'))
        A.ok(lines[2].includes('icon reference "nope/x"'))
        return true
      },
    )
  })

  it("should pass a reference to an item of another module of the package", async function () {
    const p = pkg(
      [
        {
          urn: "test/pkg/m1",
          items: [item("test/pkg/m1/a", { type: "Source", source: "a.svg" })],
        },
        {
          urn: "test/pkg/m2",
          items: [
            item("test/pkg/m2/b", { type: "Reference", urn: "test/pkg/m1/a" }),
          ],
        },
      ],
      [],
    )
    A.doesNotThrow(() => validatePackage(p, TMP_DIR))
  })
})
