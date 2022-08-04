# ShareNodes


```text
fontawesome-6/Solid/ShareNodes
```

```text
include('fontawesome-6/Solid/ShareNodes')
```



| Illustration | ShareNodes |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/ShareNodes.png) | ![illustration for ShareNodes](../../fontawesome-6/Solid/ShareNodes.Local.png) |




## ShareNodes

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ShareNodes
include('fontawesome-6/Solid/ShareNodes')

' renders the element
ShareNodes('ShareNodes', 'Share Nodes', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ShareNodes
include('fontawesome-6/Solid/ShareNodes')

' renders the element
ShareNodes('ShareNodes', 'Share Nodes', 'an optional tech label', 'an optional description')
@enduml
```

