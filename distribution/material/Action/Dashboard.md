# Dashboard


```text
material/Action/Dashboard
```

```text
include('material/Action/Dashboard')
```



| Illustration | Dashboard |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/Dashboard.png) | ![illustration for Dashboard](../../material/Action/Dashboard.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DashboardXs>`
- `<$DashboardSm>`
- `<$DashboardMd>`
- `<$DashboardLg>`





## Dashboard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Dashboard
include('material/Action/Dashboard')

' renders the element
Dashboard('Dashboard', 'Dashboard', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element Dashboard
include('material/Action/Dashboard')

' renders the element
Dashboard('Dashboard', 'Dashboard', 'an optional tech label', 'an optional description')
@enduml
```

