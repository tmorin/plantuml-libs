# Grafana


```text
simpleicons-14/G/Grafana
```

```text
include('simpleicons-14/G/Grafana')
```



| Illustration | Grafana |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Grafana.png) | ![illustration for Grafana](../../simpleicons-14/G/Grafana.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GrafanaXs>`
- `<$GrafanaSm>`
- `<$GrafanaMd>`
- `<$GrafanaLg>`





## Grafana

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Grafana
include('simpleicons-14/G/Grafana')

' renders the element
Grafana('Grafana', 'Grafana', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Grafana
include('simpleicons-14/G/Grafana')

' renders the element
Grafana('Grafana', 'Grafana', 'an optional tech label', 'an optional description')
@enduml
```

