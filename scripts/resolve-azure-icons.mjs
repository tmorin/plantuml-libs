//#! /usr/bin/env node

import fetch from "node-fetch"
import * as cheerio from "cheerio"

async function fetchLatestAzureIconPackage() {
  const url = "https://learn.microsoft.com/en-us/azure/architecture/icons/"
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.statusText}`)
  }

  const html = await response.text()
  const $ = cheerio.load(html)

  const anchor = $("a")
    .filter((_, el) => {
      const href = $(el).attr("href") || ""
      return href.includes("Azure_Public_Service_Icons_V")
    })
    .first()

  if (!anchor || !anchor.length) {
    throw new Error("Azure icons download link not found")
  }

  const href = anchor.attr("href")
  if (!href) {
    throw new Error("Azure icons link does not have a valid href")
  }

  const match = /Azure_Public_Service_Icons_V(\d+)\.zip/.exec(href)
  console.log("Resolved Azure Icon Package URL:", href)

  if (!match) {
    throw new Error(
      "Download URL did not match expected Azure_Public_Service_Icons_V<number> pattern",
    )
  }

  const version = match[1]

  return {
    newVersion: version,
    downloadUrl: href,
    version: version,
  }
}

;(async () => {
  try {
    const result = await fetchLatestAzureIconPackage()
    console.log(JSON.stringify(result, null, 2))
  } catch (error) {
    console.error(error.message)
    process.exit(1)
  }
})()

export default fetchLatestAzureIconPackage
