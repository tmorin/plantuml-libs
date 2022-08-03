# Actigraph


```text
simpleicons-7/A/Actigraph
```

```text
include('simpleicons-7/A/Actigraph')
```



| Illustration | Actigraph |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Actigraph.png) | ![illustration for Actigraph](../../simpleicons-7/A/Actigraph.Local.png) |




## Actigraph

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Actigraph
include('simpleicons-7/A/Actigraph')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Actigraph
include('simpleicons-7/A/Actigraph')

' renders the element
Actigraph('Actigraph', 'Actigraph', 'an optional tech label')
@enduml
```
