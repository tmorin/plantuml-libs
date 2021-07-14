# FormatAlignLeft


```text
material-4/Editor/FormatAlignLeft
```

```text
include('material-4/Editor/FormatAlignLeft')
```



| Illustration | FormatAlignLeft |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Editor/FormatAlignLeft.png) | ![illustration for FormatAlignLeft](../../material-4/Editor/FormatAlignLeft.Local.png) |




## FormatAlignLeft

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element FormatAlignLeft
include('material-4/Editor/FormatAlignLeft')

' renders the element
FormatAlignLeft('FormatAlignLeft', 'Format Align Left', 'an optional tech label')
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

' loads the Item which embeds the element FormatAlignLeft
include('material-4/Editor/FormatAlignLeft')

' renders the element
FormatAlignLeft('FormatAlignLeft', 'Format Align Left', 'an optional tech label')
@enduml
```

