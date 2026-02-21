# MapLocation


```text
fontawesome/Solid/MapLocation
```

```text
include('fontawesome/Solid/MapLocation')
```



| Illustration | MapLocation |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/MapLocation.png) | ![illustration for MapLocation](../../fontawesome/Solid/MapLocation.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MapLocationXs>`
- `<$MapLocationSm>`
- `<$MapLocationMd>`
- `<$MapLocationLg>`





## MapLocation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element MapLocation
include('fontawesome/Solid/MapLocation')

' renders the element
MapLocation('MapLocation', 'Map Location', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MapLocation
include('fontawesome/Solid/MapLocation')

' renders the element
MapLocation('MapLocation', 'Map Location', 'an optional tech label', 'an optional description')
@enduml
```

