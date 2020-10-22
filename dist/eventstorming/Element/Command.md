# Command

```text
eventstorming/Element/Command
```

```text
include('eventstorming/Element/Command')
```

|element|
|---|
|![](Command.element.local.png)|



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
' loads the Command element
include('eventstorming/Element/Command')
Command('command', 'Command')
note as note
A command is an intent to mutate the state of the system.
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
' loads the Command element
include('eventstorming/Element/Command')
Command('command', 'Command')
note as note
A command is an intent to mutate the state of the system.
end note
@enduml
```

