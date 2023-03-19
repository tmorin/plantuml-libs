# Neo4J


```text
simpleicons-8/N/Neo4J
```

```text
include('simpleicons-8/N/Neo4J')
```



| Illustration | Neo4J |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/N/Neo4J.png) | ![illustration for Neo4J](../../simpleicons-8/N/Neo4J.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$Neo4JXs>`
- `<$Neo4JSm>`
- `<$Neo4JMd>`
- `<$Neo4JLg>`





## Neo4J

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Neo4J
include('simpleicons-8/N/Neo4J')

' renders the element
Neo4J('Neo4J', 'Neo4 J', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Neo4J
include('simpleicons-8/N/Neo4J')

' renders the element
Neo4J('Neo4J', 'Neo4 J', 'an optional tech label', 'an optional description')
@enduml
```

