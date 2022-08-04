# Dashboard


```text
material-4/Action/Dashboard
```

```text
include('material-4/Action/Dashboard')
```



| Illustration | Dashboard |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Dashboard.png) | ![illustration for Dashboard](../../material-4/Action/Dashboard.Local.png) |




## Dashboard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Dashboard
include('material-4/Action/Dashboard')

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
include('material-4/bootstrap')

' loads the Item which embeds the element Dashboard
include('material-4/Action/Dashboard')

' renders the element
Dashboard('Dashboard', 'Dashboard', 'an optional tech label', 'an optional description')
@enduml
```

