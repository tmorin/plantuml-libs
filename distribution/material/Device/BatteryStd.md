# BatteryStd


```text
material/Device/BatteryStd
```

```text
include('material/Device/BatteryStd')
```



| Illustration | BatteryStd |
| :---: | :---: |
| ![illustration for Illustration](../../material/Device/BatteryStd.png) | ![illustration for BatteryStd](../../material/Device/BatteryStd.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BatteryStdXs>`
- `<$BatteryStdSm>`
- `<$BatteryStdMd>`
- `<$BatteryStdLg>`





## BatteryStd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element BatteryStd
include('material/Device/BatteryStd')

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
include('material/bootstrap')

' loads the Item which embeds the element BatteryStd
include('material/Device/BatteryStd')

' renders the element
BatteryStd('BatteryStd', 'Battery Std', 'an optional tech label', 'an optional description')
@enduml
```

