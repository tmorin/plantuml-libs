# Gauge


```text
fontawesome-6/Solid/Gauge
```

```text
include('fontawesome-6/Solid/Gauge')
```



| Illustration | Gauge |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Gauge.png) | ![illustration for Gauge](../../fontawesome-6/Solid/Gauge.Local.png) |




## Gauge

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Gauge
include('fontawesome-6/Solid/Gauge')

' renders the element
Gauge('Gauge', 'Gauge', 'an optional tech label')
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

' loads the Item which embeds the element Gauge
include('fontawesome-6/Solid/Gauge')

' renders the element
Gauge('Gauge', 'Gauge', 'an optional tech label')
@enduml
```

