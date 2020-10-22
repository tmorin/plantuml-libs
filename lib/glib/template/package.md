# {{= it.config.pkgName }}

{{ if (it.presentation) { }}
## Presentation
{{= it.presentation }}
{{ } }}

{{ if (it.hasBootstrap) { }}
## Bootstrap

The package handles its own bootstrap.

```plantuml
' loads the {{= it.config.pkgName }} bootstrap
include('{{= it.config.pkgName }}/bootstrap')
```
{{ } }}

{{ if (it.hasStyle) { }}
## Style

The package handles its own style.

{{ if (it.hasBootstrap) { }}The bootstrap loads the style too! ;){{ } }}

```plantuml
' loads the {{= it.config.pkgName }} style
include('{{= it.config.pkgName }}/style')
```
{{ } }}

# Modules

The package provides {{= it.modules.length }} modules.

{{ for (module of it.modules) { }}
- [{{= module.name }}]({{= module.destination }}) with {{= module.elements }} elements{{ } }}

# Examples

The package provides {{= it.examples.length }} examples.

{{ for (example of it.examples) { }}
## {{= example.name }}
![{{= example.name }}](../{{= example.destination }})<br>
[The source file.](../{{= example.source }})
{{ } }}
