# BatteryChargingFull


```text
material/Device/BatteryChargingFull
```

```text
include('material/Device/BatteryChargingFull')
```



| Illustration | BatteryChargingFull |
| :---: | :---: |
| ![illustration for Illustration](../../material/Device/BatteryChargingFull.png) | ![illustration for BatteryChargingFull](../../material/Device/BatteryChargingFull.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BatteryChargingFullXs>`
- `<$BatteryChargingFullSm>`
- `<$BatteryChargingFullMd>`
- `<$BatteryChargingFullLg>`





## BatteryChargingFull

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element BatteryChargingFull
include('material/Device/BatteryChargingFull')

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
include('material/bootstrap')

' loads the Item which embeds the element BatteryChargingFull
include('material/Device/BatteryChargingFull')

' renders the element
BatteryChargingFull('BatteryChargingFull', 'Battery Charging Full', 'an optional tech label', 'an optional description')
@enduml
```

