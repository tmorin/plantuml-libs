# PedalBike


```text
material-4/Maps/PedalBike
```

```text
include('material-4/Maps/PedalBike')
```



| Illustration | PedalBike |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/PedalBike.png) | ![illustration for PedalBike](../../material-4/Maps/PedalBike.Local.png) |




## PedalBike

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element PedalBike
include('material-4/Maps/PedalBike')

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
include('material-4/bootstrap')

' loads the Item which embeds the element PedalBike
include('material-4/Maps/PedalBike')

' renders the element
PedalBike('PedalBike', 'Pedal Bike', 'an optional tech label', 'an optional description')
@enduml
```

