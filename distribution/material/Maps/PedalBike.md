# PedalBike


```text
material/Maps/PedalBike
```

```text
include('material/Maps/PedalBike')
```



| Illustration | PedalBike |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/PedalBike.png) | ![illustration for PedalBike](../../material/Maps/PedalBike.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PedalBikeXs>`
- `<$PedalBikeSm>`
- `<$PedalBikeMd>`
- `<$PedalBikeLg>`





## PedalBike

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element PedalBike
include('material/Maps/PedalBike')

' renders the element
PedalBike('PedalBike', 'Pedal Bike', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PedalBike
include('material/Maps/PedalBike')

' renders the element
PedalBike('PedalBike', 'Pedal Bike', 'an optional tech label', 'an optional description')
@enduml
```

