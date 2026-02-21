# DirectionsBoat


```text
material/Maps/DirectionsBoat
```

```text
include('material/Maps/DirectionsBoat')
```



| Illustration | DirectionsBoat |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/DirectionsBoat.png) | ![illustration for DirectionsBoat](../../material/Maps/DirectionsBoat.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DirectionsBoatXs>`
- `<$DirectionsBoatSm>`
- `<$DirectionsBoatMd>`
- `<$DirectionsBoatLg>`





## DirectionsBoat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element DirectionsBoat
include('material/Maps/DirectionsBoat')

' renders the element
DirectionsBoat('DirectionsBoat', 'Directions Boat', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element DirectionsBoat
include('material/Maps/DirectionsBoat')

' renders the element
DirectionsBoat('DirectionsBoat', 'Directions Boat', 'an optional tech label', 'an optional description')
@enduml
```

