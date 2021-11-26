# DirectionsBoat


```text
material-4/Maps/DirectionsBoat
```

```text
include('material-4/Maps/DirectionsBoat')
```



| Illustration | DirectionsBoat |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/DirectionsBoat.png) | ![illustration for DirectionsBoat](../../material-4/Maps/DirectionsBoat.Local.png) |




## DirectionsBoat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element DirectionsBoat
include('material-4/Maps/DirectionsBoat')

' renders the element
DirectionsBoat('DirectionsBoat', 'Directions Boat', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element DirectionsBoat
include('material-4/Maps/DirectionsBoat')

' renders the element
DirectionsBoat('DirectionsBoat', 'Directions Boat', 'an optional tech label')
@enduml
```

