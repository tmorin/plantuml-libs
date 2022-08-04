# GpsOff


```text
material-4/Device/GpsOff
```

```text
include('material-4/Device/GpsOff')
```



| Illustration | GpsOff |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Device/GpsOff.png) | ![illustration for GpsOff](../../material-4/Device/GpsOff.Local.png) |




## GpsOff

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element GpsOff
include('material-4/Device/GpsOff')

' renders the element
GpsOff('GpsOff', 'Gps Off', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element GpsOff
include('material-4/Device/GpsOff')

' renders the element
GpsOff('GpsOff', 'Gps Off', 'an optional tech label', 'an optional description')
@enduml
```

