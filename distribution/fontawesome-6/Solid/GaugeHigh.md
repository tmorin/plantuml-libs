# GaugeHigh


```text
fontawesome-6/Solid/GaugeHigh
```

```text
include('fontawesome-6/Solid/GaugeHigh')
```



| Illustration | GaugeHigh |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/GaugeHigh.png) | ![illustration for GaugeHigh](../../fontawesome-6/Solid/GaugeHigh.Local.png) |




## GaugeHigh

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element GaugeHigh
include('fontawesome-6/Solid/GaugeHigh')

' renders the element
GaugeHigh('GaugeHigh', 'Gauge High', 'an optional tech label')
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

' loads the Item which embeds the element GaugeHigh
include('fontawesome-6/Solid/GaugeHigh')

' renders the element
GaugeHigh('GaugeHigh', 'Gauge High', 'an optional tech label')
@enduml
```

