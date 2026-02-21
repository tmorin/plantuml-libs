# Dgraph


```text
simpleicons/D/Dgraph
```

```text
include('simpleicons/D/Dgraph')
```



| Illustration | Dgraph |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/D/Dgraph.png) | ![illustration for Dgraph](../../simpleicons/D/Dgraph.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DgraphXs>`
- `<$DgraphSm>`
- `<$DgraphMd>`
- `<$DgraphLg>`





## Dgraph

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Dgraph
include('simpleicons/D/Dgraph')

' renders the element
Dgraph('Dgraph', 'Dgraph', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Dgraph
include('simpleicons/D/Dgraph')

' renders the element
Dgraph('Dgraph', 'Dgraph', 'an optional tech label', 'an optional description')
@enduml
```

