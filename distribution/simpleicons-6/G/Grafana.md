# Grafana


```text
simpleicons-6/G/Grafana
```

```text
include('simpleicons-6/G/Grafana')
```



| Illustration | Grafana |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/G/Grafana.png) | ![illustration for Grafana](../../simpleicons-6/G/Grafana.Local.png) |




## Grafana

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Grafana
include('simpleicons-6/G/Grafana')

' renders the element
Grafana('Grafana', 'Grafana', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Grafana
include('simpleicons-6/G/Grafana')

' renders the element
Grafana('Grafana', 'Grafana', 'an optional tech label')
@enduml
```

