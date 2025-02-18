# Leaflet


```text
simpleicons-14/L/Leaflet
```

```text
include('simpleicons-14/L/Leaflet')
```



| Illustration | Leaflet |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/L/Leaflet.png) | ![illustration for Leaflet](../../simpleicons-14/L/Leaflet.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LeafletXs>`
- `<$LeafletSm>`
- `<$LeafletMd>`
- `<$LeafletLg>`





## Leaflet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Leaflet
include('simpleicons-14/L/Leaflet')

' renders the element
Leaflet('Leaflet', 'Leaflet', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Leaflet
include('simpleicons-14/L/Leaflet')

' renders the element
Leaflet('Leaflet', 'Leaflet', 'an optional tech label', 'an optional description')
@enduml
```

