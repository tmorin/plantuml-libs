# FormatColorFill


```text
material/Editor/FormatColorFill
```

```text
include('material/Editor/FormatColorFill')
```



| Illustration | FormatColorFill |
| :---: | :---: |
| ![illustration for Illustration](../../material/Editor/FormatColorFill.png) | ![illustration for FormatColorFill](../../material/Editor/FormatColorFill.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FormatColorFillXs>`
- `<$FormatColorFillSm>`
- `<$FormatColorFillMd>`
- `<$FormatColorFillLg>`





## FormatColorFill

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element FormatColorFill
include('material/Editor/FormatColorFill')

' renders the element
FormatColorFill('FormatColorFill', 'Format Color Fill', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FormatColorFill
include('material/Editor/FormatColorFill')

' renders the element
FormatColorFill('FormatColorFill', 'Format Color Fill', 'an optional tech label', 'an optional description')
@enduml
```

