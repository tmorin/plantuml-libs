# BatteryQuarter


```text
fontawesome/Solid/BatteryQuarter
```

```text
include('fontawesome/Solid/BatteryQuarter')
```



| Illustration | BatteryQuarter |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/BatteryQuarter.png) | ![illustration for BatteryQuarter](../../fontawesome/Solid/BatteryQuarter.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BatteryQuarterXs>`
- `<$BatteryQuarterSm>`
- `<$BatteryQuarterMd>`
- `<$BatteryQuarterLg>`





## BatteryQuarter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element BatteryQuarter
include('fontawesome/Solid/BatteryQuarter')

' renders the element
BatteryQuarter('BatteryQuarter', 'Battery Quarter', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BatteryQuarter
include('fontawesome/Solid/BatteryQuarter')

' renders the element
BatteryQuarter('BatteryQuarter', 'Battery Quarter', 'an optional tech label', 'an optional description')
@enduml
```

