# BatteryQuarter


```text
fontawesome-5/Solid/BatteryQuarter
```

```text
include('fontawesome-5/Solid/BatteryQuarter')
```



| Illustration | BatteryQuarter |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/BatteryQuarter.png) | ![illustration for BatteryQuarter](../../fontawesome-5/Solid/BatteryQuarter.Local.png) |




## BatteryQuarter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element BatteryQuarter
include('fontawesome-5/Solid/BatteryQuarter')

' renders the element
BatteryQuarter('BatteryQuarter', 'Battery Quarter', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element BatteryQuarter
include('fontawesome-5/Solid/BatteryQuarter')

' renders the element
BatteryQuarter('BatteryQuarter', 'Battery Quarter', 'an optional tech label')
@enduml
```

