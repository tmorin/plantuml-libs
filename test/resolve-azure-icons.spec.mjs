import { describe, it } from "mocha"
import fetchLatestAzureIconPackage from "../scripts/resolve-azure-icons.mjs"
import assert from "assert"

describe("fetchLatestAzureIconPackage", () => {
  it("should fetch and parse the latest Icon Package from the live Azure website", async () => {
    const result = await fetchLatestAzureIconPackage()

    assert.match(result.newVersion, /^\d+$/, "newVersion should be a number")
    assert.ok(result.downloadUrl.includes("Azure_Public_Service_Icons_V"), "downloadUrl should include 'Azure_Public_Service_Icons_V'")
    assert.match(result.version, /\d+/, "version should be a number")

    console.log("Live test result:", result)
  })
})
