import template from "lodash/template"
import { marked } from "marked"
import { Sitemap } from "./sitemap"

export interface Summary {
  readonly sitemap: Sitemap

  render(): string
}

export class ItemsSummaryAsJson implements Summary {
  constructor(readonly sitemap: Sitemap) {}

  static create(sitemap: Sitemap): ItemsSummaryAsJson {
    return new ItemsSummaryAsJson(sitemap)
  }

  render(): string {
    const items = this.sitemap.library.packages.reduce((allItems, p) => {
      const packageItems = p.modules.reduce((modulesItems, m) => {
        return [...modulesItems, ...m.items]
      }, [])
      return [...allItems, ...packageItems]
    }, [])
    return JSON.stringify(items, null, 2)
  }
}

export class SideSummaryAsHtml implements Summary {
  constructor(readonly sitemap: Sitemap) {}

  static create(sitemap: Sitemap): SideSummaryAsHtml {
    return new SideSummaryAsHtml(sitemap)
  }

  render(): string {
    const summaryAsMd = template(
      `- [<%= sitemap.library.readme.label %>](<%= sitemap.library.readme.href %>)
- [<%= sitemap.library.changelog.label %>](<%= sitemap.library.changelog.href %>)
- [<%= sitemap.library.security.label %>](<%= sitemap.library.security.href %>)
<% for (p of sitemap.library.packages) { %>
### <%= p.urn %>

- [<%= p.readme.label %>](<%= p.readme.href %>)<% for (m of p.modules) { %>
- [<%= m.readme.label %>](<%= m.readme.href %>)<% } %>
<% } %>`
    )({ sitemap: this.sitemap })
    return marked.parse(summaryAsMd, {})
  }
}
