import { describe, it } from "mocha"
import fetchLatestAWSIconPackage from "../scripts/resolve-aws-icons.mjs"
import assert from "assert"
import { readFileSync } from "fs"
import { resolve } from "path"

function mockFetch(html) {
  return async () => ({
    ok: true,
    text: async () => html,
  })
}

const FIELDS = ["downloadUrl", "folderDate", "newVersion", "publishedDate"]

describe("fetchLatestAWSIconPackage", () => {
  // test/fixtures/valid.html is a saved copy of the AWS page from the January 2026 release: it
  // is a snapshot and keeps asserting January, whatever the release the repository is pinned to.
  it("should fetch and parse the Icon Package of the January 2026 snapshot", async () => {
    const html = readFileSync(resolve("test/fixtures/valid.html"), "utf8")
    const result = await fetchLatestAWSIconPackage(mockFetch(html))

    assert.deepEqual(Object.keys(result).sort(), FIELDS)
    assert.equal(result.newVersion, "aws-q1-2026")
    assert.equal(
      result.downloadUrl,
      "https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/architecture/approved/architecture-icons/Icon-package_01302026.31b40d126ed27079b708594940ad577a86150582.zip",
    )
    assert.equal(result.publishedDate, "2026-01-30")
    assert.equal(result.folderDate, "01302026")
  })

  it("should resolve the folder date of the July 2026 release", async () => {
    const url =
      "https://d1.awsstatic.com/onedam/marketing-channels/website/public/shared/architecture-icon-release/Icon-package_07312026.5846e92413caa21490223536cc97f1269e44fa92.zip"
    const html = `<html><body><a href="${url}">Download Icon package</a></body></html>`
    const result = await fetchLatestAWSIconPackage(mockFetch(html))

    assert.deepEqual(Object.keys(result).sort(), FIELDS)
    assert.equal(result.newVersion, "aws-q3-2026")
    assert.equal(result.downloadUrl, url)
    assert.equal(result.publishedDate, "2026-07-31")
    assert.equal(result.folderDate, "07312026")
  })

  it("should be documented field by field in the how-to", () => {
    const howto = readFileSync(
      resolve("doc/howto.upgrade-aws-package.md"),
      "utf8",
    )
    for (const field of FIELDS) {
      assert.ok(howto.includes(field), `the how-to does not name ${field}`)
    }
  })
})
