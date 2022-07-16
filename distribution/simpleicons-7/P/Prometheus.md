# Prometheus


```text
simpleicons-7/P/Prometheus
```

```text
include('simpleicons-7/P/Prometheus')
```



| Illustration | Prometheus |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/P/Prometheus.png) | ![illustration for Prometheus](../../simpleicons-7/P/Prometheus.Local.png) |




## Prometheus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Prometheus
include('simpleicons-7/P/Prometheus')

' renders the element
Prometheus('Prometheus', 'Prometheus', 'an optional tech label')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Prometheus
include('simpleicons-7/P/Prometheus')

' renders the element
Prometheus('Prometheus', 'Prometheus', 'an optional tech label')
@enduml
```

