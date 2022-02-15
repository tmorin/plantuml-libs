# BatteryEmpty


```text
fontawesome-6/Solid/BatteryEmpty
```

```text
include('fontawesome-6/Solid/BatteryEmpty')
```



| Illustration | BatteryEmpty |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/BatteryEmpty.png) | ![illustration for BatteryEmpty](../../fontawesome-6/Solid/BatteryEmpty.Local.png) |




## BatteryEmpty

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element BatteryEmpty
include('fontawesome-6/Solid/BatteryEmpty')

' renders the element
BatteryEmpty('BatteryEmpty', 'Battery Empty', 'an optional tech label')
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

' loads the Item which embeds the element BatteryEmpty
include('fontawesome-6/Solid/BatteryEmpty')

' renders the element
BatteryEmpty('BatteryEmpty', 'Battery Empty', 'an optional tech label')
@enduml
```

