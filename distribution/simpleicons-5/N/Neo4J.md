# Neo4J


```text
simpleicons-5/N/Neo4J
```

```text
include('simpleicons-5/N/Neo4J')
```



| Illustration | Neo4J |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/N/Neo4J.png) | ![illustration for Neo4J](../../simpleicons-5/N/Neo4J.Local.png) |




## Neo4J

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Neo4J
include('simpleicons-5/N/Neo4J')

' renders the element
Neo4J('Neo4J', 'Neo4 J', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Neo4J
include('simpleicons-5/N/Neo4J')

' renders the element
Neo4J('Neo4J', 'Neo4 J', 'an optional tech label')
@enduml
```

