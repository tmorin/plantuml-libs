# ElectricBike


```text
material/Maps/ElectricBike
```

```text
include('material/Maps/ElectricBike')
```



| Illustration | ElectricBike |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/ElectricBike.png) | ![illustration for ElectricBike](../../material/Maps/ElectricBike.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ElectricBikeXs>`
- `<$ElectricBikeSm>`
- `<$ElectricBikeMd>`
- `<$ElectricBikeLg>`





## ElectricBike

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element ElectricBike
include('material/Maps/ElectricBike')

' renders the element
ElectricBike('ElectricBike', 'Electric Bike', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ElectricBike
include('material/Maps/ElectricBike')

' renders the element
ElectricBike('ElectricBike', 'Electric Bike', 'an optional tech label', 'an optional description')
@enduml
```

