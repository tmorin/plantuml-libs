//#! /usr/bin/env node

import fetch from "node-fetch"
import * as cheerio from "cheerio"

async function fetchLatestAWSIconPackage() {
  const url = "https://aws.amazon.com/architecture/icons/"
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.statusText}`)
  }

  const html = await response.text()
  const $ = cheerio.load(html)

  const anchor = $("a")
    .filter((_, el) =>
      $(el).text().trim().toLowerCase().includes("icon package"),
    )
    .first()

  if (!anchor || !anchor.length) {
    throw new Error("Icon Package link not found")
  }

  const href = anchor.attr("href")
  if (!href) {
    throw new Error("Icon Package link does not have a valid href")
  }

  const absoluteUrl = new URL(href, url).toString()
  console.log("Resolved AWS Icon Package URL:", absoluteUrl)
  
  let date
  let match = /Asset-Package_(\d{8}).*\.zip/.exec(absoluteUrl)
  
  if (!match) {
    match = /Icon-package_(\d{8})/.exec(absoluteUrl)
  }
  
  if (!match) {
    throw new Error(
      "Download URL did not match expected Asset-Package_<date> or Icon-package_<date> pattern",
    )
  }

  date = match[1]
  const year = date.slice(4, 8)
  const month = date.slice(0, 2)
  const day = date.slice(2, 4)

  let quarter
  if (month === "01") {
    quarter = 1
  } else if (month === "04") {
    quarter = 2
  } else if (month === "07") {
    quarter = 3
  } else {
    throw new Error("Unexpected published month; expected 01, 04, or 07")
  }

  return {
    newVersion: `aws-q${quarter}-${year}`,
    downloadUrl: absoluteUrl,
    publishedDate: `${year}-${month}-${day}`,
  }
}

;(async () => {
  try {
    const result = await fetchLatestAWSIconPackage()
    console.log(JSON.stringify(result, null, 2))
  } catch (error) {
    console.error(error.message)
    process.exit(1)
  }
})()

export default fetchLatestAWSIconPackage
