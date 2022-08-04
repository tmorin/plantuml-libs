# ZoomIn


```text
material-4/Action/ZoomIn
```

```text
include('material-4/Action/ZoomIn')
```



| Illustration | ZoomIn |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/ZoomIn.png) | ![illustration for ZoomIn](../../material-4/Action/ZoomIn.Local.png) |




## ZoomIn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ZoomIn
include('material-4/Action/ZoomIn')

' renders the element
ZoomIn('ZoomIn', 'Zoom In', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ZoomIn
include('material-4/Action/ZoomIn')

' renders the element
ZoomIn('ZoomIn', 'Zoom In', 'an optional tech label', 'an optional description')
@enduml
```

