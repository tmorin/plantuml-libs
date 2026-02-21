# FormatIndentIncrease


```text
material/Editor/FormatIndentIncrease
```

```text
include('material/Editor/FormatIndentIncrease')
```



| Illustration | FormatIndentIncrease |
| :---: | :---: |
| ![illustration for Illustration](../../material/Editor/FormatIndentIncrease.png) | ![illustration for FormatIndentIncrease](../../material/Editor/FormatIndentIncrease.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FormatIndentIncreaseXs>`
- `<$FormatIndentIncreaseSm>`
- `<$FormatIndentIncreaseMd>`
- `<$FormatIndentIncreaseLg>`





## FormatIndentIncrease

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element FormatIndentIncrease
include('material/Editor/FormatIndentIncrease')

' renders the element
FormatIndentIncrease('FormatIndentIncrease', 'Format Indent Increase', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FormatIndentIncrease
include('material/Editor/FormatIndentIncrease')

' renders the element
FormatIndentIncrease('FormatIndentIncrease', 'Format Indent Increase', 'an optional tech label', 'an optional description')
@enduml
```

