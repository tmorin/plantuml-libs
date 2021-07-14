# ElectricBike


```text
material-4/Maps/ElectricBike
```

```text
include('material-4/Maps/ElectricBike')
```



| Illustration | ElectricBike |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/ElectricBike.png) | ![illustration for ElectricBike](../../material-4/Maps/ElectricBike.Local.png) |




## ElectricBike

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ElectricBike
include('material-4/Maps/ElectricBike')

' renders the element
ElectricBike('ElectricBike', 'Electric Bike', 'an optional tech label')
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

' loads the Item which embeds the element ElectricBike
include('material-4/Maps/ElectricBike')

' renders the element
ElectricBike('ElectricBike', 'Electric Bike', 'an optional tech label')
@enduml
```

