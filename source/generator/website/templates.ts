import { minify } from "html-minifier-terser"
import { Config } from "./config"

export interface Page {
  title: string
  content: string
  summary: string
  path: string
}

export async function renderSimplePage(
  config: Config,
  page: Page
): Promise<string> {
  return minify(
    `<!DOCTYPE html>
<html lang="en">
<head>
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
    </style>
</head>
<body>
<nav class="navbar fixed-top bg-light">
  <div class="container">
    <div class="d-flex flex-fill">
      <div class="d-flex">
        <button class="btn btn-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#summary" role="button">
            <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="d-flex flex-fill justify-content-center">
        <span class="navbar-brand">${config.library.name} - ${config.library.version}</span>
      </div>
      <div class="d-flex">
        <a class="btn btn-light" href="${config.library.github}" target="_blank">
            <i class="bi-github" role="img" aria-label="GitHub"></i>
        </a>
    </div>
    </div>
  </div>
</nav>
<aside id="summary" class="offcanvas offcanvas-start" tabindex="-1" >
<div class="offcanvas-header">
  <h2 class="offcanvas-title" id="offcanvasLabel">Summary</h2>
  <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
</div>
<div class="offcanvas-body">${page.summary}</div>
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
