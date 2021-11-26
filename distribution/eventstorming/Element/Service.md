# Service


```text
eventstorming/Element/Service
```

```text
include('eventstorming/Element/Service')
```



| Service |
| :---: |
| ![illustration for Service](../../eventstorming/Element/Service.Local.png) |




## Service

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eventstorming/bootstrap')

' loads the Item which embeds the element Service
include('eventstorming/Element/Service')

Service('Service') [
Service
--
A service implements domain operations which cannot belong to an aggregate.
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

' loads the Item which embeds the element Service
include('eventstorming/Element/Service')

Service('Service') [
Service
--
A service implements domain operations which cannot belong to an aggregate.
]
@enduml
```

