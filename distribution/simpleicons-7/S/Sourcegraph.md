# Sourcegraph


```text
simpleicons-7/S/Sourcegraph
```

```text
include('simpleicons-7/S/Sourcegraph')
```



| Illustration | Sourcegraph |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/S/Sourcegraph.png) | ![illustration for Sourcegraph](../../simpleicons-7/S/Sourcegraph.Local.png) |




## Sourcegraph

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Sourcegraph
include('simpleicons-7/S/Sourcegraph')

' renders the element
Sourcegraph('Sourcegraph', 'Sourcegraph', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sourcegraph
include('simpleicons-7/S/Sourcegraph')

' renders the element
Sourcegraph('Sourcegraph', 'Sourcegraph', 'an optional tech label', 'an optional description')
@enduml
```

