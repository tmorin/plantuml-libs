import { describe, it } from "mocha"
import fetchLatestAzureIconPackage from "../scripts/resolve-azure-icons.mjs"
import assert from "assert"
import { readFileSync } from "fs"
import { resolve } from "path"

function mockFetch(html) {
  return async () => ({
    ok: true,
    text: async () => html,
  })
}

describe("fetchLatestAzureIconPackage", () => {
  it("should fetch and parse the latest Icon Package", async () => {
    const html = readFileSync(resolve("test/fixtures/azure-valid.html"), "utf8")
    const result = await fetchLatestAzureIconPackage(mockFetch(html))

    assert.equal(result.newVersion, "23")
    assert.equal(
      result.downloadUrl,
      "https://arch-center.azureedge.net/icons/Azure_Public_Service_Icons_V23.zip",
    )
    assert.equal(result.version, "23")
  })
})
