# DirectionsRailway


```text
material-4/Maps/DirectionsRailway
```

```text
include('material-4/Maps/DirectionsRailway')
```



| Illustration | DirectionsRailway |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/DirectionsRailway.png) | ![illustration for DirectionsRailway](../../material-4/Maps/DirectionsRailway.Local.png) |




## DirectionsRailway

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element DirectionsRailway
include('material-4/Maps/DirectionsRailway')

' renders the element
DirectionsRailway('DirectionsRailway', 'Directions Railway', 'an optional tech label')
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

' loads the Item which embeds the element DirectionsRailway
include('material-4/Maps/DirectionsRailway')

' renders the element
DirectionsRailway('DirectionsRailway', 'Directions Railway', 'an optional tech label')
@enduml
```

