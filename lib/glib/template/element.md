# {{= it.entry.element.label }}

```text
{{= it.entry.element.urn }}
```

```text
include('{{= it.entry.element.urn }}')
```

{{= it.mdTableHeader }}
{{= it.mdTableHeaderLine }}
{{= it.mdImages }}

{{ for (const snippetType of it.snippetTypes) { }}
{{ const snippet = it.snippets[snippetType]; }}
## {{= snippetType }}
### Load remotely
```plantuml
{{= snippet.remote }}
```
### Load locally
```plantuml
{{= snippet.local }}
```
{{ } }}
