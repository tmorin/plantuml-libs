# TemperatureQuarter


```text
fontawesome-6/Solid/TemperatureQuarter
```

```text
include('fontawesome-6/Solid/TemperatureQuarter')
```



| Illustration | TemperatureQuarter |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/TemperatureQuarter.png) | ![illustration for TemperatureQuarter](../../fontawesome-6/Solid/TemperatureQuarter.Local.png) |




## TemperatureQuarter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element TemperatureQuarter
include('fontawesome-6/Solid/TemperatureQuarter')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element TemperatureQuarter
include('fontawesome-6/Solid/TemperatureQuarter')

' renders the element
TemperatureQuarter('TemperatureQuarter', 'Temperature Quarter', 'an optional tech label', 'an optional description')
@enduml
```

