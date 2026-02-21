# Highlighter


```text
fontawesome/Solid/Highlighter
```

```text
include('fontawesome/Solid/Highlighter')
```



| Illustration | Highlighter |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Highlighter.png) | ![illustration for Highlighter](../../fontawesome/Solid/Highlighter.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HighlighterXs>`
- `<$HighlighterSm>`
- `<$HighlighterMd>`
- `<$HighlighterLg>`





## Highlighter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Highlighter
include('fontawesome/Solid/Highlighter')

' renders the element
Highlighter('Highlighter', 'Highlighter', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Highlighter
include('fontawesome/Solid/Highlighter')

' renders the element
Highlighter('Highlighter', 'Highlighter', 'an optional tech label', 'an optional description')
@enduml
```

