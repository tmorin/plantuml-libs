# DirectionsCar


```text
material/Maps/DirectionsCar
```

```text
include('material/Maps/DirectionsCar')
```



| Illustration | DirectionsCar |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/DirectionsCar.png) | ![illustration for DirectionsCar](../../material/Maps/DirectionsCar.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DirectionsCarXs>`
- `<$DirectionsCarSm>`
- `<$DirectionsCarMd>`
- `<$DirectionsCarLg>`





## DirectionsCar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element DirectionsCar
include('material/Maps/DirectionsCar')

' renders the element
DirectionsCar('DirectionsCar', 'Directions Car', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element DirectionsCar
include('material/Maps/DirectionsCar')

' renders the element
DirectionsCar('DirectionsCar', 'Directions Car', 'an optional tech label', 'an optional description')
@enduml
```

