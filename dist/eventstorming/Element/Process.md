# Process

```text
eventstorming/Element/Process
```

```text
include('eventstorming/Element/Process')
```

|element|
|---|
|![](Process.element.local.png)|



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
' loads the Process element
include('eventstorming/Element/Process')
Process('process', 'Process')
note as note
A process is a short-lived business transaction.
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
' loads the Process element
include('eventstorming/Element/Process')
Process('process', 'Process')
note as note
A process is a short-lived business transaction.
end note
@enduml
```

