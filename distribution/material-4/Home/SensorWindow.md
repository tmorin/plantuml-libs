# SensorWindow


```text
material-4/Home/SensorWindow
```

```text
include('material-4/Home/SensorWindow')
```



| Illustration | SensorWindow |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Home/SensorWindow.png) | ![illustration for SensorWindow](../../material-4/Home/SensorWindow.Local.png) |




## SensorWindow

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SensorWindow
include('material-4/Home/SensorWindow')

' renders the element
SensorWindow('SensorWindow', 'Sensor Window', 'an optional tech label')
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

' loads the Item which embeds the element SensorWindow
include('material-4/Home/SensorWindow')

' renders the element
SensorWindow('SensorWindow', 'Sensor Window', 'an optional tech label')
@enduml
```

