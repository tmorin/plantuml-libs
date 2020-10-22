# Service

```text
eventstorming/Element/Service
```

```text
include('eventstorming/Element/Service')
```

|element|
|---|
|![](Service.element.local.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the eventstorming bootstrap
include('eventstorming/bootstrap')
' loads the Service element
include('eventstorming/Element/Service')
Service('service', 'Service')
note as note
A service implements domain operations which cannot belong to an aggregate.
end note
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the eventstorming bootstrap
include('eventstorming/bootstrap')
' loads the Service element
include('eventstorming/Element/Service')
Service('service', 'Service')
note as note
A service implements domain operations which cannot belong to an aggregate.
end note
@enduml
```

