# Person

```text
eventstorming/Element/Person
```

```text
include('eventstorming/Element/Person')
```

|element|
|---|
|![](Person.element.local.png)|



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
' loads the Person element
include('eventstorming/Element/Person')
Person('person', 'Person')
note as note
A person who executes a command through a view.
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
' loads the Person element
include('eventstorming/Element/Person')
Person('person', 'Person')
note as note
A person who executes a command through a view.
end note
@enduml
```

