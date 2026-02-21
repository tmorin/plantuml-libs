# Route


```text
fontawesome/Solid/Route
```

```text
include('fontawesome/Solid/Route')
```



| Illustration | Route |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Route.png) | ![illustration for Route](../../fontawesome/Solid/Route.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RouteXs>`
- `<$RouteSm>`
- `<$RouteMd>`
- `<$RouteLg>`





## Route

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Route
include('fontawesome/Solid/Route')

' renders the element
Route('Route', 'Route', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Route
include('fontawesome/Solid/Route')

' renders the element
Route('Route', 'Route', 'an optional tech label', 'an optional description')
@enduml
```

