# FormatListNumbered


```text
material/Editor/FormatListNumbered
```

```text
include('material/Editor/FormatListNumbered')
```



| Illustration | FormatListNumbered |
| :---: | :---: |
| ![illustration for Illustration](../../material/Editor/FormatListNumbered.png) | ![illustration for FormatListNumbered](../../material/Editor/FormatListNumbered.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FormatListNumberedXs>`
- `<$FormatListNumberedSm>`
- `<$FormatListNumberedMd>`
- `<$FormatListNumberedLg>`





## FormatListNumbered

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element FormatListNumbered
include('material/Editor/FormatListNumbered')

' renders the element
FormatListNumbered('FormatListNumbered', 'Format List Numbered', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element FormatListNumbered
include('material/Editor/FormatListNumbered')

' renders the element
FormatListNumbered('FormatListNumbered', 'Format List Numbered', 'an optional tech label', 'an optional description')
@enduml
```

