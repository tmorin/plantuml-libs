# MapMarkerAlt


```text
fontawesome-5/Solid/MapMarkerAlt
```

```text
include('fontawesome-5/Solid/MapMarkerAlt')
```



| Illustration | MapMarkerAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/MapMarkerAlt.png) | ![illustration for MapMarkerAlt](../../fontawesome-5/Solid/MapMarkerAlt.Local.png) |




## MapMarkerAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element MapMarkerAlt
include('fontawesome-5/Solid/MapMarkerAlt')

' renders the element
MapMarkerAlt('MapMarkerAlt', 'Map Marker Alt', 'an optional tech label')
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

' loads the Item which embeds the element MapMarkerAlt
include('fontawesome-5/Solid/MapMarkerAlt')

' renders the element
MapMarkerAlt('MapMarkerAlt', 'Map Marker Alt', 'an optional tech label')
@enduml
```

