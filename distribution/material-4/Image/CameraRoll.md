# CameraRoll


```text
material-4/Image/CameraRoll
```

```text
include('material-4/Image/CameraRoll')
```



| Illustration | CameraRoll |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/CameraRoll.png) | ![illustration for CameraRoll](../../material-4/Image/CameraRoll.Local.png) |




## CameraRoll

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element CameraRoll
include('material-4/Image/CameraRoll')

' renders the element
CameraRoll('CameraRoll', 'Camera Roll', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CameraRoll
include('material-4/Image/CameraRoll')

' renders the element
CameraRoll('CameraRoll', 'Camera Roll', 'an optional tech label', 'an optional description')
@enduml
```

