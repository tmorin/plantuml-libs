# MapMarker


```text
fontawesome/Solid/MapMarker
```

```text
include('fontawesome/Solid/MapMarker')
```



| Illustration | MapMarker |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/MapMarker.png) | ![illustration for MapMarker](../../fontawesome/Solid/MapMarker.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MapMarkerXs>`
- `<$MapMarkerSm>`
- `<$MapMarkerMd>`
- `<$MapMarkerLg>`





## MapMarker

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element MapMarker
include('fontawesome/Solid/MapMarker')

' renders the element
MapMarker('MapMarker', 'Map Marker', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MapMarker
include('fontawesome/Solid/MapMarker')

' renders the element
MapMarker('MapMarker', 'Map Marker', 'an optional tech label', 'an optional description')
@enduml
```

