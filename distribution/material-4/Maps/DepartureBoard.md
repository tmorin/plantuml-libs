# DepartureBoard


```text
material-4/Maps/DepartureBoard
```

```text
include('material-4/Maps/DepartureBoard')
```



| Illustration | DepartureBoard |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/DepartureBoard.png) | ![illustration for DepartureBoard](../../material-4/Maps/DepartureBoard.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DepartureBoardXs>`
- `<$DepartureBoardSm>`
- `<$DepartureBoardMd>`
- `<$DepartureBoardLg>`





## DepartureBoard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element DepartureBoard
include('material-4/Maps/DepartureBoard')

' renders the element
DepartureBoard('DepartureBoard', 'Departure Board', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element DepartureBoard
include('material-4/Maps/DepartureBoard')

' renders the element
DepartureBoard('DepartureBoard', 'Departure Board', 'an optional tech label', 'an optional description')
@enduml
```

