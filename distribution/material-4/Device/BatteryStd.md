# BatteryStd


```text
material-4/Device/BatteryStd
```

```text
include('material-4/Device/BatteryStd')
```



| Illustration | BatteryStd |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Device/BatteryStd.png) | ![illustration for BatteryStd](../../material-4/Device/BatteryStd.Local.png) |




## BatteryStd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element BatteryStd
include('material-4/Device/BatteryStd')

' renders the element
BatteryStd('BatteryStd', 'Battery Std', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BatteryStd
include('material-4/Device/BatteryStd')

' renders the element
BatteryStd('BatteryStd', 'Battery Std', 'an optional tech label', 'an optional description')
@enduml
```

