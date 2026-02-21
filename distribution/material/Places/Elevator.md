# Elevator


```text
material/Places/Elevator
```

```text
include('material/Places/Elevator')
```



| Illustration | Elevator |
| :---: | :---: |
| ![illustration for Illustration](../../material/Places/Elevator.png) | ![illustration for Elevator](../../material/Places/Elevator.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ElevatorXs>`
- `<$ElevatorSm>`
- `<$ElevatorMd>`
- `<$ElevatorLg>`





## Elevator

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Elevator
include('material/Places/Elevator')

' renders the element
Elevator('Elevator', 'Elevator', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Elevator
include('material/Places/Elevator')

' renders the element
Elevator('Elevator', 'Elevator', 'an optional tech label', 'an optional description')
@enduml
```

