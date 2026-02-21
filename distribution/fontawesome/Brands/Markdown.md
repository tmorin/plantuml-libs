# Markdown


```text
fontawesome/Brands/Markdown
```

```text
include('fontawesome/Brands/Markdown')
```



| Illustration | Markdown |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Markdown.png) | ![illustration for Markdown](../../fontawesome/Brands/Markdown.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MarkdownXs>`
- `<$MarkdownSm>`
- `<$MarkdownMd>`
- `<$MarkdownLg>`





## Markdown

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Markdown
include('fontawesome/Brands/Markdown')

' renders the element
Markdown('Markdown', 'Markdown', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Markdown
include('fontawesome/Brands/Markdown')

' renders the element
Markdown('Markdown', 'Markdown', 'an optional tech label', 'an optional description')
@enduml
```

