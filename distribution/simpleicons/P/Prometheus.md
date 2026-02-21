# Prometheus


```text
simpleicons/P/Prometheus
```

```text
include('simpleicons/P/Prometheus')
```



| Illustration | Prometheus |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Prometheus.png) | ![illustration for Prometheus](../../simpleicons/P/Prometheus.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PrometheusXs>`
- `<$PrometheusSm>`
- `<$PrometheusMd>`
- `<$PrometheusLg>`





## Prometheus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Prometheus
include('simpleicons/P/Prometheus')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Prometheus
include('simpleicons/P/Prometheus')

' renders the element
Prometheus('Prometheus', 'Prometheus', 'an optional tech label', 'an optional description')
@enduml
```

