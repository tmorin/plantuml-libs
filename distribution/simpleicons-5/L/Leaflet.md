# Leaflet


```text
simpleicons-5/L/Leaflet
```

```text
include('simpleicons-5/L/Leaflet')
```



| Illustration | Leaflet |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/L/Leaflet.png) | ![illustration for Leaflet](../../simpleicons-5/L/Leaflet.Local.png) |




## Leaflet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Leaflet
include('simpleicons-5/L/Leaflet')

' renders the element
Leaflet('Leaflet', 'Leaflet', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Leaflet
include('simpleicons-5/L/Leaflet')

' renders the element
Leaflet('Leaflet', 'Leaflet', 'an optional tech label')
@enduml
```

