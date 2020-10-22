# UserInterface

```text
eventstorming/Element/UserInterface
```

```text
include('eventstorming/Element/UserInterface')
```

|element|
|---|
|![](UserInterface.element.local.png)|



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
' loads the UserInterface element
include('eventstorming/Element/UserInterface')
UserInterface('user_interface', 'UserInterface')
note as note
A user interface helps users to interact with the system.
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
' loads the UserInterface element
include('eventstorming/Element/UserInterface')
UserInterface('user_interface', 'UserInterface')
note as note
A user interface helps users to interact with the system.
end note
@enduml
```

