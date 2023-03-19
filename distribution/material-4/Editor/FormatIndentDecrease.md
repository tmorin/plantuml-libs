# FormatIndentDecrease


```text
material-4/Editor/FormatIndentDecrease
```

```text
include('material-4/Editor/FormatIndentDecrease')
```



| Illustration | FormatIndentDecrease |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Editor/FormatIndentDecrease.png) | ![illustration for FormatIndentDecrease](../../material-4/Editor/FormatIndentDecrease.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FormatIndentDecreaseXs>`
- `<$FormatIndentDecreaseSm>`
- `<$FormatIndentDecreaseMd>`
- `<$FormatIndentDecreaseLg>`





## FormatIndentDecrease

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element FormatIndentDecrease
include('material-4/Editor/FormatIndentDecrease')

' renders the element
FormatIndentDecrease('FormatIndentDecrease', 'Format Indent Decrease', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element FormatIndentDecrease
include('material-4/Editor/FormatIndentDecrease')

' renders the element
FormatIndentDecrease('FormatIndentDecrease', 'Format Indent Decrease', 'an optional tech label', 'an optional description')
@enduml
```

