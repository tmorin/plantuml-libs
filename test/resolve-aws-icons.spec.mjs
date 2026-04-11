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

describe("fetchLatestAWSIconPackage", () => {
  it("should fetch and parse the latest Icon Package", async () => {
    const html = readFileSync(resolve("test/fixtures/valid.html"), "utf8")
    const result = await fetchLatestAWSIconPackage(mockFetch(html))

    assert.equal(result.newVersion, "aws-q1-2026")
    assert.equal(
      result.downloadUrl,
      "https://d1.awsstatic.com/onedam/marketing-channels/website/aws/en_US/architecture/approved/architecture-icons/Icon-package_01302026.31b40d126ed27079b708594940ad577a86150582.zip",
    )
    assert.equal(result.publishedDate, "2026-01-30")
  })
})
