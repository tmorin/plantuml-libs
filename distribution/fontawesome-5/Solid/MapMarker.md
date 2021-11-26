# MapMarker


```text
fontawesome-5/Solid/MapMarker
```

```text
include('fontawesome-5/Solid/MapMarker')
```



| Illustration | MapMarker |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/MapMarker.png) | ![illustration for MapMarker](../../fontawesome-5/Solid/MapMarker.Local.png) |




## MapMarker

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element MapMarker
include('fontawesome-5/Solid/MapMarker')

' renders the element
MapMarker('MapMarker', 'Map Marker', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element MapMarker
include('fontawesome-5/Solid/MapMarker')

' renders the element
MapMarker('MapMarker', 'Map Marker', 'an optional tech label')
@enduml
```

