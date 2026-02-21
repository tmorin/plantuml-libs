# BatteryHalf


```text
fontawesome/Solid/BatteryHalf
```

```text
include('fontawesome/Solid/BatteryHalf')
```



| Illustration | BatteryHalf |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/BatteryHalf.png) | ![illustration for BatteryHalf](../../fontawesome/Solid/BatteryHalf.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BatteryHalfXs>`
- `<$BatteryHalfSm>`
- `<$BatteryHalfMd>`
- `<$BatteryHalfLg>`





## BatteryHalf

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element BatteryHalf
include('fontawesome/Solid/BatteryHalf')

' renders the element
BatteryHalf('BatteryHalf', 'Battery Half', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element BatteryHalf
include('fontawesome/Solid/BatteryHalf')

' renders the element
BatteryHalf('BatteryHalf', 'Battery Half', 'an optional tech label', 'an optional description')
@enduml
```

