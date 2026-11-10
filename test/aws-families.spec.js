const A = require("assert").strict
const P = require("path")
const F = require("fs")
const { parse } = require("csv-parse/sync")

require("ts-node/register")
const {
  assertFamiliesHaveColor,
  findFamiliesWithoutColor,
} = require("../source/library/packages/aws")

const AWS_DIR = P.resolve("source/library/packages/aws")

function item(family) {
  return { urn: `aws/Architecture/${family}/Thing`, family, elements: [] }
}

function readRows() {
  return parse(F.readFileSync(P.join(AWS_DIR, "families.csv"), "utf-8"), {
    columns: true,
  })
}

describe("aws families", function () {
  describe("findFamiliesWithoutColor", function () {
    it("should list the families without a row, sorted and without duplicate", function () {
      const rows = [{ name: "Compute", color: "$AWS_COLOR_ORANGE" }]
      const items = [
        item("Storage"),
        item("Compute"),
        item("Analytics"),
        item("Storage"),
      ]
      A.deepEqual(findFamiliesWithoutColor(items, rows), [
        "Analytics",
        "Storage",
      ])
    })

    it("should ignore the items without family", function () {
      const items = [{ urn: "aws/Category/Compute", elements: [] }]
      A.deepEqual(findFamiliesWithoutColor(items, []), [])
    })

    it("should return nothing when every family has a row", function () {
      const rows = [
        { name: "Compute", color: "$AWS_COLOR_ORANGE" },
        { name: "Storage", color: "$AWS_COLOR_GREEN" },
      ]
      A.deepEqual(
        findFamiliesWithoutColor([item("Compute"), item("Storage")], rows),
        [],
      )
    })
  })

  describe("assertFamiliesHaveColor, called by AwsFactory.create", function () {
    it("should throw naming the package, the families and families.csv", async function () {
      const items = [item("ZzNoRowB"), item("ZzNoRowA"), item("Compute")]
      A.throws(
        () => assertFamiliesHaveColor("aws", items, readRows()),
        (error) => {
          A.match(error.message, /aws/)
          A.match(error.message, /families\.csv/)
          A.match(error.message, /ZzNoRowA, ZzNoRowB/)
          A.doesNotMatch(error.message, /Compute/)
          return true
        },
      )
    })

    it("should pass when every family has a row", function () {
      A.doesNotThrow(() =>
        assertFamiliesHaveColor("aws", [item("Compute")], readRows()),
      )
    })
  })

  describe("families.csv", function () {
    it("should have no duplicate name and be sorted by name", function () {
      const names = readRows().map((row) => row.name)
      A.equal(new Set(names).size, names.length)
      A.deepEqual(
        names,
        [...names].sort((a, b) => (a < b ? -1 : a > b ? 1 : 0)),
      )
    })

    it("should only use colors defined by bootstrap.tera", function () {
      const bootstrap = F.readFileSync(
        P.join(AWS_DIR, "templates", "bootstrap.tera"),
        "utf-8",
      )
      const defined = new Set(
        [...bootstrap.matchAll(/!global (\$AWS_COLOR_\w+)=/g)].map((m) => m[1]),
      )
      A.ok(defined.size > 0)
      for (const row of readRows()) {
        A.ok(defined.has(row.color), `${row.name}: ${row.color} is not defined`)
      }
    })
  })
})
