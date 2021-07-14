# Dgraph


```text
simpleicons-5/D/Dgraph
```

```text
include('simpleicons-5/D/Dgraph')
```



| Illustration | Dgraph |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/D/Dgraph.png) | ![illustration for Dgraph](../../simpleicons-5/D/Dgraph.Local.png) |




## Dgraph

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Dgraph
include('simpleicons-5/D/Dgraph')

' renders the element
Dgraph('Dgraph', 'Dgraph', 'an optional tech label')
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

' loads the Item which embeds the element Dgraph
include('simpleicons-5/D/Dgraph')

' renders the element
Dgraph('Dgraph', 'Dgraph', 'an optional tech label')
@enduml
```

