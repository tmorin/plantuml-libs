# Query


```text
eventstorming/Element/Query
```

```text
include('eventstorming/Element/Query')
```



| Query |
| :---: |
| ![illustration for Query](../../eventstorming/Element/Query.Local.png) |




## Query

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eventstorming/bootstrap')

' loads the Item which embeds the element Query
include('eventstorming/Element/Query')

Query('Query') [
Query
--
A query is a wish to get a point of view of the state of the system.
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

' loads the Item which embeds the element Query
include('eventstorming/Element/Query')

Query('Query') [
Query
--
A query is a wish to get a point of view of the state of the system.
]
@enduml
```

