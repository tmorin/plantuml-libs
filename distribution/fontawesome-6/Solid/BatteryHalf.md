# BatteryHalf


```text
fontawesome-6/Solid/BatteryHalf
```

```text
include('fontawesome-6/Solid/BatteryHalf')
```



| Illustration | BatteryHalf |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/BatteryHalf.png) | ![illustration for BatteryHalf](../../fontawesome-6/Solid/BatteryHalf.Local.png) |




## BatteryHalf

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element BatteryHalf
include('fontawesome-6/Solid/BatteryHalf')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element BatteryHalf
include('fontawesome-6/Solid/BatteryHalf')

' renders the element
BatteryHalf('BatteryHalf', 'Battery Half', 'an optional tech label', 'an optional description')
@enduml
```

