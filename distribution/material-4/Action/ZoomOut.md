# ZoomOut


```text
material-4/Action/ZoomOut
```

```text
include('material-4/Action/ZoomOut')
```



| Illustration | ZoomOut |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/ZoomOut.png) | ![illustration for ZoomOut](../../material-4/Action/ZoomOut.Local.png) |




## ZoomOut

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ZoomOut
include('material-4/Action/ZoomOut')

' renders the element
ZoomOut('ZoomOut', 'Zoom Out', 'an optional tech label')
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

' loads the Item which embeds the element ZoomOut
include('material-4/Action/ZoomOut')

' renders the element
ZoomOut('ZoomOut', 'Zoom Out', 'an optional tech label')
@enduml
```

