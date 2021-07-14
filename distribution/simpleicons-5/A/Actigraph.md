# Actigraph


```text
simpleicons-5/A/Actigraph
```

```text
include('simpleicons-5/A/Actigraph')
```



| Illustration | Actigraph |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Actigraph.png) | ![illustration for Actigraph](../../simpleicons-5/A/Actigraph.Local.png) |




## Actigraph

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Actigraph
include('simpleicons-5/A/Actigraph')

' renders the element
Actigraph('Actigraph', 'Actigraph', 'an optional tech label')
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

' loads the Item which embeds the element Actigraph
include('simpleicons-5/A/Actigraph')

' renders the element
Actigraph('Actigraph', 'Actigraph', 'an optional tech label')
@enduml
```

