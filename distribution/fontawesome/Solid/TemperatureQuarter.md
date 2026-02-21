# TemperatureQuarter


```text
fontawesome/Solid/TemperatureQuarter
```

```text
include('fontawesome/Solid/TemperatureQuarter')
```



| Illustration | TemperatureQuarter |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/TemperatureQuarter.png) | ![illustration for TemperatureQuarter](../../fontawesome/Solid/TemperatureQuarter.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TemperatureQuarterXs>`
- `<$TemperatureQuarterSm>`
- `<$TemperatureQuarterMd>`
- `<$TemperatureQuarterLg>`





## TemperatureQuarter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element TemperatureQuarter
include('fontawesome/Solid/TemperatureQuarter')

' renders the element
TemperatureQuarter('TemperatureQuarter', 'Temperature Quarter', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TemperatureQuarter
include('fontawesome/Solid/TemperatureQuarter')

' renders the element
TemperatureQuarter('TemperatureQuarter', 'Temperature Quarter', 'an optional tech label', 'an optional description')
@enduml
```

