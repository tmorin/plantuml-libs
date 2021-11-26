# PanTool


```text
material-4/Action/PanTool
```

```text
include('material-4/Action/PanTool')
```



| Illustration | PanTool |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/PanTool.png) | ![illustration for PanTool](../../material-4/Action/PanTool.Local.png) |




## PanTool

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element PanTool
include('material-4/Action/PanTool')

' renders the element
PanTool('PanTool', 'Pan Tool', 'an optional tech label')
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

' loads the Item which embeds the element PanTool
include('material-4/Action/PanTool')

' renders the element
PanTool('PanTool', 'Pan Tool', 'an optional tech label')
@enduml
```

