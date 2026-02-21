# FormatAlignLeft


```text
material/Editor/FormatAlignLeft
```

```text
include('material/Editor/FormatAlignLeft')
```



| Illustration | FormatAlignLeft |
| :---: | :---: |
| ![illustration for Illustration](../../material/Editor/FormatAlignLeft.png) | ![illustration for FormatAlignLeft](../../material/Editor/FormatAlignLeft.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FormatAlignLeftXs>`
- `<$FormatAlignLeftSm>`
- `<$FormatAlignLeftMd>`
- `<$FormatAlignLeftLg>`





## FormatAlignLeft

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element FormatAlignLeft
include('material/Editor/FormatAlignLeft')

' renders the element
FormatAlignLeft('FormatAlignLeft', 'Format Align Left', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FormatAlignLeft
include('material/Editor/FormatAlignLeft')

' renders the element
FormatAlignLeft('FormatAlignLeft', 'Format Align Left', 'an optional tech label', 'an optional description')
@enduml
```

