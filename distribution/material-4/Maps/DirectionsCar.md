# DirectionsCar


```text
material-4/Maps/DirectionsCar
```

```text
include('material-4/Maps/DirectionsCar')
```



| Illustration | DirectionsCar |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/DirectionsCar.png) | ![illustration for DirectionsCar](../../material-4/Maps/DirectionsCar.Local.png) |




## DirectionsCar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element DirectionsCar
include('material-4/Maps/DirectionsCar')

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
include('material-4/bootstrap')

' loads the Item which embeds the element DirectionsCar
include('material-4/Maps/DirectionsCar')

' renders the element
DirectionsCar('DirectionsCar', 'Directions Car', 'an optional tech label', 'an optional description')
@enduml
```

