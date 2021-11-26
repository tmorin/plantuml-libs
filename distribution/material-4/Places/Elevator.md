# Elevator


```text
material-4/Places/Elevator
```

```text
include('material-4/Places/Elevator')
```



| Illustration | Elevator |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Places/Elevator.png) | ![illustration for Elevator](../../material-4/Places/Elevator.Local.png) |




## Elevator

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Elevator
include('material-4/Places/Elevator')

' renders the element
Elevator('Elevator', 'Elevator', 'an optional tech label')
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

' loads the Item which embeds the element Elevator
include('material-4/Places/Elevator')

' renders the element
Elevator('Elevator', 'Elevator', 'an optional tech label')
@enduml
```

