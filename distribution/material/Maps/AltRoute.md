# AltRoute


```text
material/Maps/AltRoute
```

```text
include('material/Maps/AltRoute')
```



| Illustration | AltRoute |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/AltRoute.png) | ![illustration for AltRoute](../../material/Maps/AltRoute.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AltRouteXs>`
- `<$AltRouteSm>`
- `<$AltRouteMd>`
- `<$AltRouteLg>`





## AltRoute

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element AltRoute
include('material/Maps/AltRoute')

' renders the element
AltRoute('AltRoute', 'Alt Route', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AltRoute
include('material/Maps/AltRoute')

' renders the element
AltRoute('AltRoute', 'Alt Route', 'an optional tech label', 'an optional description')
@enduml
```

