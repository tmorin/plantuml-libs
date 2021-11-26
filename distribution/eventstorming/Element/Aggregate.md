# Aggregate


```text
eventstorming/Element/Aggregate
```

```text
include('eventstorming/Element/Aggregate')
```



| Aggregate |
| :---: |
| ![illustration for Aggregate](../../eventstorming/Element/Aggregate.Local.png) |




## Aggregate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eventstorming/bootstrap')

' loads the Item which embeds the element Aggregate
include('eventstorming/Element/Aggregate')

Aggregate('Aggregate') [
Aggregate
--
An aggregate expresses domain aspects that can be treated as a single unit.
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

' loads the Item which embeds the element Aggregate
include('eventstorming/Element/Aggregate')

Aggregate('Aggregate') [
Aggregate
--
An aggregate expresses domain aspects that can be treated as a single unit.
]
@enduml
```

