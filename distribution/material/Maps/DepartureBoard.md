# DepartureBoard


```text
material/Maps/DepartureBoard
```

```text
include('material/Maps/DepartureBoard')
```



| Illustration | DepartureBoard |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/DepartureBoard.png) | ![illustration for DepartureBoard](../../material/Maps/DepartureBoard.Local.png) |



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
include('material/bootstrap')

' loads the Item which embeds the element DepartureBoard
include('material/Maps/DepartureBoard')

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
include('material/bootstrap')

' loads the Item which embeds the element DepartureBoard
include('material/Maps/DepartureBoard')

' renders the element
DepartureBoard('DepartureBoard', 'Departure Board', 'an optional tech label', 'an optional description')
@enduml
```

