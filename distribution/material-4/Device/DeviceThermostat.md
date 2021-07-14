# DeviceThermostat


```text
material-4/Device/DeviceThermostat
```

```text
include('material-4/Device/DeviceThermostat')
```



| Illustration | DeviceThermostat |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Device/DeviceThermostat.png) | ![illustration for DeviceThermostat](../../material-4/Device/DeviceThermostat.Local.png) |




## DeviceThermostat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element DeviceThermostat
include('material-4/Device/DeviceThermostat')

' renders the element
DeviceThermostat('DeviceThermostat', 'Device Thermostat', 'an optional tech label')
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

' loads the Item which embeds the element DeviceThermostat
include('material-4/Device/DeviceThermostat')

' renders the element
DeviceThermostat('DeviceThermostat', 'Device Thermostat', 'an optional tech label')
@enduml
```

