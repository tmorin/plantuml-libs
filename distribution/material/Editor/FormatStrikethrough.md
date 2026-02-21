# FormatStrikethrough


```text
material/Editor/FormatStrikethrough
```

```text
include('material/Editor/FormatStrikethrough')
```



| Illustration | FormatStrikethrough |
| :---: | :---: |
| ![illustration for Illustration](../../material/Editor/FormatStrikethrough.png) | ![illustration for FormatStrikethrough](../../material/Editor/FormatStrikethrough.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FormatStrikethroughXs>`
- `<$FormatStrikethroughSm>`
- `<$FormatStrikethroughMd>`
- `<$FormatStrikethroughLg>`





## FormatStrikethrough

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element FormatStrikethrough
include('material/Editor/FormatStrikethrough')

' renders the element
FormatStrikethrough('FormatStrikethrough', 'Format Strikethrough', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FormatStrikethrough
include('material/Editor/FormatStrikethrough')

' renders the element
FormatStrikethrough('FormatStrikethrough', 'Format Strikethrough', 'an optional tech label', 'an optional description')
@enduml
```

