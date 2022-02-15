# Actigraph


```text
simpleicons-6/A/Actigraph
```

```text
include('simpleicons-6/A/Actigraph')
```



| Illustration | Actigraph |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Actigraph.png) | ![illustration for Actigraph](../../simpleicons-6/A/Actigraph.Local.png) |




## Actigraph

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Actigraph
include('simpleicons-6/A/Actigraph')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Actigraph
include('simpleicons-6/A/Actigraph')

' renders the element
Actigraph('Actigraph', 'Actigraph', 'an optional tech label')
@enduml
```

