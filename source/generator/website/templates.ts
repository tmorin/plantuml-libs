import { minify } from "html-minifier-terser"
import { Config } from "./config"

export interface SimplePage {
  relHrefToRoot: string
  relHrefToItemsJson: string
  gTagId: string
  title: string
  content: string
  summary: string
}

export async function renderSimplePage(
  config: Config,
  page: SimplePage
): Promise<string> {
  return minify(
    `<!DOCTYPE html>
<html lang="en">
<head>
    <script async src="https://www.googletagmanager.com/gtag/js?id=${page.gTagId}"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${page.gTagId}');
    </script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${page.title} - ${config.library.name}</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
    <style>
    main table tr {
        border: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color);
    }
    main table td {
        padding: var(--bs-body-font-size);
    }
    main table thead tr {
        text-align: center;
        background-color: var(--bs-light);
    }
    main pre {
        margin-bottom: var(--bs-body-font-size);
        padding: 0.5rem;
        background-color: var(--bs-light);
    }
    main h1, main h2, main h3, main h4 {
        padding: var(--bs-body-font-size) 0; 
    }
    #search .list-group {
        max-height: 50vh;
    }
    #search .list-group .list-group-item {
        border-left: none;
        border-right: none;
        border-radius: 0;
    }
    </style>
</head>
<body>
<nav class="navbar fixed-top bg-light">
  <div class="container">
    <div class="d-flex flex-fill">
      <div class="d-flex">
        <a class="btn btn-light" data-bs-toggle="offcanvas"  href="#summary" title="Open the Summary">
            <i class="bi-layout-text-sidebar-reverse" role="img" aria-label="summary"></i>
        </a>        
        <a class="btn btn-light" data-bs-toggle="modal"  href="#search" title="Open the Search dialog">
            <i class="bi-search" role="img" aria-label="search"></i>
        </a>
      </div>
      <div class="d-flex flex-fill justify-content-center">
        <span class="navbar-brand">${config.library.name} - ${config.library.version}</span>
      </div>
      <div class="d-flex">
        <a class="btn btn-light" href="${config.library.github}" title="Go to the GitHub Repository" target="_blank">
            <i class="bi-github" role="img" aria-label="GitHub"></i>
        </a>
    </div>
    </div>
  </div>
</nav>
<aside id="summary" class="offcanvas offcanvas-start" tabindex="-1" >
<div class="offcanvas-header">
  <h2 class="offcanvas-title">Summary</h2>
  <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
</div>
<div class="offcanvas-body">${page.summary}</div>
</aside>
<aside id="search" class="modal" tabindex="-1" >
<div class="modal-dialog modal-lg">
    <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title">Search</h2>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <form name="search">
                <input id="searchTermInput" class="form-control" type="text" name="term" placeholder="type a regular expression">
            </form>
            <div id="searchItemsList" class="mt-3 list-group overflow-auto"></div>
        </div>
    </div>
</div>
<template id="searchGroupItemTemplate">
<a href="" class="list-group-item list-group-item-action">
<div class="d-flex w-100 justify-content-start align-items-center">
<h5 class="flex-grow-1"></h5>
<img src="" alt="" height="50"/>
</div>
</a>
</template>
    <script>
    var itemsAsPromise = fetch("${page.relHrefToItemsJson}").then(function (resp) {return resp.json()})
    document.querySelector("#search").addEventListener('shown.bs.modal', function (evt) {
        evt.target.querySelector("#searchTermInput").focus()
    })
    document.querySelector("#searchTermInput").addEventListener("input", function (evt) {
        evt.preventDefault()
        var filterItemsAsPromise =  itemsAsPromise.then(function (items) {
            return !evt.target.value.trim() ? [] : items.filter(function (item) {
                return new RegExp(evt.target.value, "ig").test(item.urn)
            })
        })
        filterItemsAsPromise.then(function (items) {
            return items.slice(0, 400).map(function (item) {
                var itemReadmeHref = "${page.relHrefToRoot}/" + item.readme.href
                var itemImgHref = "${page.relHrefToRoot}/" + item.readme.href.replace(/.html$/, ".Local.png")
                var groupItemNode = document.querySelector("#searchGroupItemTemplate").content.cloneNode(true)
                groupItemNode.querySelector("a").href = itemReadmeHref
                groupItemNode.querySelector("h5").textContent = item.urn
                groupItemNode.querySelector("img").src = itemImgHref
                groupItemNode.querySelector("img").alt = item.urn
                return groupItemNode
            })
        }).then(function (groupItemAsNodes) {
            var searchItemsListNode = document.querySelector("#searchItemsList"); 
            searchItemsListNode.innerHTML = ""
            groupItemAsNodes.forEach(function (groupItemAsNode) {
                searchItemsListNode.appendChild(groupItemAsNode)
            })
            var firstListGroupItem = searchItemsListNode.querySelector(".list-group-item:nth-child(1)")
            if (firstListGroupItem) {
                firstListGroupItem.scrollIntoView()
            }
        })
    })
    </script>
</aside>
<main id="main" class="d-flex flex-fill flex-column min-vh-100">
    <div class="flex-grow-1 pt-5 mt-5">
        <section class="container">${page.content}</section>
    </div>
    <div class="flex-shrink-1">
        <footer id="footer" class="text-bg-dark py-5 mt-5">
            <div class="container">
                <div class="d-flex justify-content-center">
                    <ul class="my-0 mx-auto list-unstyled list-inline">
                        <li class="list-inline-item">${config.library.name}</li>
                        <li class="list-inline-item">${config.library.version}</li>
                    </ul>
                </div>
            </div>
        </footer>
    </div>
</main>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
</body>
</html>`,
    {
      collapseWhitespace: true,
      conservativeCollapse: true,
      removeAttributeQuotes: true,
      removeComments: true,
      removeEmptyAttributes: true,
      removeOptionalTags: true,
      removeRedundantAttributes: true,
      minifyCSS: true,
      minifyJS: true,
    }
  )
}
