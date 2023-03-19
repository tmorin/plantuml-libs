# FlightLand


```text
material-4/Action/FlightLand
```

```text
include('material-4/Action/FlightLand')
```



| Illustration | FlightLand |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/FlightLand.png) | ![illustration for FlightLand](../../material-4/Action/FlightLand.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FlightLandXs>`
- `<$FlightLandSm>`
- `<$FlightLandMd>`
- `<$FlightLandLg>`





## FlightLand

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element FlightLand
include('material-4/Action/FlightLand')

' renders the element
FlightLand('FlightLand', 'Flight Land', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FlightLand
include('material-4/Action/FlightLand')

' renders the element
FlightLand('FlightLand', 'Flight Land', 'an optional tech label', 'an optional description')
@enduml
```

