# BatteryChargingFull


```text
material-4/Device/BatteryChargingFull
```

```text
include('material-4/Device/BatteryChargingFull')
```



| Illustration | BatteryChargingFull |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Device/BatteryChargingFull.png) | ![illustration for BatteryChargingFull](../../material-4/Device/BatteryChargingFull.Local.png) |




## BatteryChargingFull

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element BatteryChargingFull
include('material-4/Device/BatteryChargingFull')

' renders the element
BatteryChargingFull('BatteryChargingFull', 'Battery Charging Full', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BatteryChargingFull
include('material-4/Device/BatteryChargingFull')

' renders the element
BatteryChargingFull('BatteryChargingFull', 'Battery Charging Full', 'an optional tech label', 'an optional description')
@enduml
```

