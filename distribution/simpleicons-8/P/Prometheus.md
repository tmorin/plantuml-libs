# Prometheus


```text
simpleicons-8/P/Prometheus
```

```text
include('simpleicons-8/P/Prometheus')
```



| Illustration | Prometheus |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/P/Prometheus.png) | ![illustration for Prometheus](../../simpleicons-8/P/Prometheus.Local.png) |




## Prometheus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Prometheus
include('simpleicons-8/P/Prometheus')

' renders the element
Prometheus('Prometheus', 'Prometheus', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Prometheus
include('simpleicons-8/P/Prometheus')

' renders the element
Prometheus('Prometheus', 'Prometheus', 'an optional tech label', 'an optional description')
@enduml
```

