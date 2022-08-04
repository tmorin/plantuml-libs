# LocalGasStation


```text
material-4/Maps/LocalGasStation
```

```text
include('material-4/Maps/LocalGasStation')
```



| Illustration | LocalGasStation |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/LocalGasStation.png) | ![illustration for LocalGasStation](../../material-4/Maps/LocalGasStation.Local.png) |




## LocalGasStation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element LocalGasStation
include('material-4/Maps/LocalGasStation')

' renders the element
LocalGasStation('LocalGasStation', 'Local Gas Station', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LocalGasStation
include('material-4/Maps/LocalGasStation')

' renders the element
LocalGasStation('LocalGasStation', 'Local Gas Station', 'an optional tech label', 'an optional description')
@enduml
```

