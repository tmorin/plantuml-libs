# ElectricCar


```text
material/Maps/ElectricCar
```

```text
include('material/Maps/ElectricCar')
```



| Illustration | ElectricCar |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/ElectricCar.png) | ![illustration for ElectricCar](../../material/Maps/ElectricCar.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ElectricCarXs>`
- `<$ElectricCarSm>`
- `<$ElectricCarMd>`
- `<$ElectricCarLg>`





## ElectricCar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element ElectricCar
include('material/Maps/ElectricCar')

' renders the element
ElectricCar('ElectricCar', 'Electric Car', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ElectricCar
include('material/Maps/ElectricCar')

' renders the element
ElectricCar('ElectricCar', 'Electric Car', 'an optional tech label', 'an optional description')
@enduml
```

