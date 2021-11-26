# ElectricCar


```text
material-4/Maps/ElectricCar
```

```text
include('material-4/Maps/ElectricCar')
```



| Illustration | ElectricCar |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/ElectricCar.png) | ![illustration for ElectricCar](../../material-4/Maps/ElectricCar.Local.png) |




## ElectricCar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ElectricCar
include('material-4/Maps/ElectricCar')

' renders the element
ElectricCar('ElectricCar', 'Electric Car', 'an optional tech label')
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

' loads the Item which embeds the element ElectricCar
include('material-4/Maps/ElectricCar')

' renders the element
ElectricCar('ElectricCar', 'Electric Car', 'an optional tech label')
@enduml
```

