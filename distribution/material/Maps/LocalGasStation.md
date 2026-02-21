# LocalGasStation


```text
material/Maps/LocalGasStation
```

```text
include('material/Maps/LocalGasStation')
```



| Illustration | LocalGasStation |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/LocalGasStation.png) | ![illustration for LocalGasStation](../../material/Maps/LocalGasStation.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LocalGasStationXs>`
- `<$LocalGasStationSm>`
- `<$LocalGasStationMd>`
- `<$LocalGasStationLg>`





## LocalGasStation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element LocalGasStation
include('material/Maps/LocalGasStation')

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
include('material/bootstrap')

' loads the Item which embeds the element LocalGasStation
include('material/Maps/LocalGasStation')

' renders the element
LocalGasStation('LocalGasStation', 'Local Gas Station', 'an optional tech label', 'an optional description')
@enduml
```

