# MapSigns


```text
fontawesome-5/Solid/MapSigns
```

```text
include('fontawesome-5/Solid/MapSigns')
```



| Illustration | MapSigns |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/MapSigns.png) | ![illustration for MapSigns](../../fontawesome-5/Solid/MapSigns.Local.png) |




## MapSigns

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element MapSigns
include('fontawesome-5/Solid/MapSigns')

' renders the element
MapSigns('MapSigns', 'Map Signs', 'an optional tech label')
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

' loads the Item which embeds the element MapSigns
include('fontawesome-5/Solid/MapSigns')

' renders the element
MapSigns('MapSigns', 'Map Signs', 'an optional tech label')
@enduml
```

