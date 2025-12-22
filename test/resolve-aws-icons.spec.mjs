import { describe, it } from "mocha"
import fetchLatestAWSIconPackage from "../scripts/resolve-aws-icons.mjs"
import assert from "assert"

describe("fetchLatestAWSIconPackage", () => {
  it("should fetch and parse the latest Icon Package from the live AWS website", async () => {
    const result = await fetchLatestAWSIconPackage()

    assert.ok(result.newVersion.startsWith("aws-q"), "newVersion should start with 'aws-q'")
    assert.ok(result.downloadUrl.includes("Asset-Package"), "downloadUrl should include 'Asset-Package'")
    assert.match(result.publishedDate, /\d{4}-\d{2}-\d{2}/, "publishedDate should match YYYY-MM-DD format")

    console.log("Live test result:", result)
  })
})
