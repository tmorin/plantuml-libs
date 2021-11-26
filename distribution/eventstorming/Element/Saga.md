# Saga


```text
eventstorming/Element/Saga
```

```text
include('eventstorming/Element/Saga')
```



| Saga |
| :---: |
| ![illustration for Saga](../../eventstorming/Element/Saga.Local.png) |




## Saga

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eventstorming/bootstrap')

' loads the Item which embeds the element Saga
include('eventstorming/Element/Saga')

Saga('Saga') [
Saga
--
A saga is a long-lived business transaction.
]
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
include('eventstorming/bootstrap')

' loads the Item which embeds the element Saga
include('eventstorming/Element/Saga')

Saga('Saga') [
Saga
--
A saga is a long-lived business transaction.
]
@enduml
```

