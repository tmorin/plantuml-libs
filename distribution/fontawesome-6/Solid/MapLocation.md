# MapLocation


```text
fontawesome-6/Solid/MapLocation
```

```text
include('fontawesome-6/Solid/MapLocation')
```



| Illustration | MapLocation |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/MapLocation.png) | ![illustration for MapLocation](../../fontawesome-6/Solid/MapLocation.Local.png) |




## MapLocation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element MapLocation
include('fontawesome-6/Solid/MapLocation')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element MapLocation
include('fontawesome-6/Solid/MapLocation')

' renders the element
MapLocation('MapLocation', 'Map Location', 'an optional tech label', 'an optional description')
@enduml
```

