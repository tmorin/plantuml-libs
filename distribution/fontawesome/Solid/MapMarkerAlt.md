# MapMarkerAlt


```text
fontawesome/Solid/MapMarkerAlt
```

```text
include('fontawesome/Solid/MapMarkerAlt')
```



| Illustration | MapMarkerAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/MapMarkerAlt.png) | ![illustration for MapMarkerAlt](../../fontawesome/Solid/MapMarkerAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MapMarkerAltXs>`
- `<$MapMarkerAltSm>`
- `<$MapMarkerAltMd>`
- `<$MapMarkerAltLg>`





## MapMarkerAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element MapMarkerAlt
include('fontawesome/Solid/MapMarkerAlt')

' renders the element
MapMarkerAlt('MapMarkerAlt', 'Map Marker Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MapMarkerAlt
include('fontawesome/Solid/MapMarkerAlt')

' renders the element
MapMarkerAlt('MapMarkerAlt', 'Map Marker Alt', 'an optional tech label', 'an optional description')
@enduml
```

