# BatteryFull


```text
material/Device/BatteryFull
```

```text
include('material/Device/BatteryFull')
```



| Illustration | BatteryFull |
| :---: | :---: |
| ![illustration for Illustration](../../material/Device/BatteryFull.png) | ![illustration for BatteryFull](../../material/Device/BatteryFull.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BatteryFullXs>`
- `<$BatteryFullSm>`
- `<$BatteryFullMd>`
- `<$BatteryFullLg>`





## BatteryFull

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element BatteryFull
include('material/Device/BatteryFull')

' renders the element
BatteryFull('BatteryFull', 'Battery Full', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BatteryFull
include('material/Device/BatteryFull')

' renders the element
BatteryFull('BatteryFull', 'Battery Full', 'an optional tech label', 'an optional description')
@enduml
```

