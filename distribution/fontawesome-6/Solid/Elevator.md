# Elevator


```text
fontawesome-6/Solid/Elevator
```

```text
include('fontawesome-6/Solid/Elevator')
```



| Illustration | Elevator |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Elevator.png) | ![illustration for Elevator](../../fontawesome-6/Solid/Elevator.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Elevator
include('fontawesome-6/Solid/Elevator')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Elevator
include('fontawesome-6/Solid/Elevator')

' renders the element
Elevator('Elevator', 'Elevator', 'an optional tech label', 'an optional description')
@enduml
```

