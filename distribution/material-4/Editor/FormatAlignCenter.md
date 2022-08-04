# FormatAlignCenter


```text
material-4/Editor/FormatAlignCenter
```

```text
include('material-4/Editor/FormatAlignCenter')
```



| Illustration | FormatAlignCenter |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Editor/FormatAlignCenter.png) | ![illustration for FormatAlignCenter](../../material-4/Editor/FormatAlignCenter.Local.png) |




## FormatAlignCenter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element FormatAlignCenter
include('material-4/Editor/FormatAlignCenter')

' renders the element
FormatAlignCenter('FormatAlignCenter', 'Format Align Center', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FormatAlignCenter
include('material-4/Editor/FormatAlignCenter')

' renders the element
FormatAlignCenter('FormatAlignCenter', 'Format Align Center', 'an optional tech label', 'an optional description')
@enduml
```

