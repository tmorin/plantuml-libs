# StopScreenShare


```text
material-4/Communication/StopScreenShare
```

```text
include('material-4/Communication/StopScreenShare')
```



| Illustration | StopScreenShare |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Communication/StopScreenShare.png) | ![illustration for StopScreenShare](../../material-4/Communication/StopScreenShare.Local.png) |




## StopScreenShare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element StopScreenShare
include('material-4/Communication/StopScreenShare')

' renders the element
StopScreenShare('StopScreenShare', 'Stop Screen Share', 'an optional tech label')
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

' loads the Item which embeds the element StopScreenShare
include('material-4/Communication/StopScreenShare')

' renders the element
StopScreenShare('StopScreenShare', 'Stop Screen Share', 'an optional tech label')
@enduml
```

