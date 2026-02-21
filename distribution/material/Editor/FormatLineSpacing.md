# FormatLineSpacing


```text
material/Editor/FormatLineSpacing
```

```text
include('material/Editor/FormatLineSpacing')
```



| Illustration | FormatLineSpacing |
| :---: | :---: |
| ![illustration for Illustration](../../material/Editor/FormatLineSpacing.png) | ![illustration for FormatLineSpacing](../../material/Editor/FormatLineSpacing.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FormatLineSpacingXs>`
- `<$FormatLineSpacingSm>`
- `<$FormatLineSpacingMd>`
- `<$FormatLineSpacingLg>`





## FormatLineSpacing

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element FormatLineSpacing
include('material/Editor/FormatLineSpacing')

' renders the element
FormatLineSpacing('FormatLineSpacing', 'Format Line Spacing', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FormatLineSpacing
include('material/Editor/FormatLineSpacing')

' renders the element
FormatLineSpacing('FormatLineSpacing', 'Format Line Spacing', 'an optional tech label', 'an optional description')
@enduml
```

