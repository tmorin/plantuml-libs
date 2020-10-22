# Policy

```text
eventstorming/Element/Policy
```

```text
include('eventstorming/Element/Policy')
```

|element|
|---|
|![](Policy.element.local.png)|



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
' loads the Policy element
include('eventstorming/Element/Policy')
Policy('policy', 'Policy')
note as note
A policy captures the reactive logic of a process.
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
' loads the Policy element
include('eventstorming/Element/Policy')
Policy('policy', 'Policy')
note as note
A policy captures the reactive logic of a process.
end note
@enduml
```

