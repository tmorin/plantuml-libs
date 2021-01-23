# Neo4 J

```text
simpleicons-4/N/Neo4J
```

```text
include('simpleicons-4/N/Neo4J')
```

|icon|element|
|---|---|
|![](Neo4J.png)|![](Neo4J.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the simpleicons-4 bootstrap
include('simpleicons-4/bootstrap')
' loads the Neo4J element
include('simpleicons-4/N/Neo4J')
Neo4J('neo_4_j', 'Neo4 J', 'an optional tech field')
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
' loads the simpleicons-4 bootstrap
include('simpleicons-4/bootstrap')
' loads the Neo4J element
include('simpleicons-4/N/Neo4J')
Neo4J('neo_4_j', 'Neo4 J', 'an optional tech field')
@enduml
```

