# Aggregate

```text
eventstorming/Element/Aggregate
```

```text
include('eventstorming/Element/Aggregate')
```

|element|
|---|
|![](Aggregate.element.local.png)|



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
' loads the Aggregate element
include('eventstorming/Element/Aggregate')
Aggregate('aggregate', 'Aggregate')
note as note
An aggregate expresses domain aspects that can be treated as a single unit.
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
' loads the Aggregate element
include('eventstorming/Element/Aggregate')
Aggregate('aggregate', 'Aggregate')
note as note
An aggregate expresses domain aspects that can be treated as a single unit.
end note
@enduml
```

