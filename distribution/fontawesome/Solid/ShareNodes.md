# ShareNodes


```text
fontawesome/Solid/ShareNodes
```

```text
include('fontawesome/Solid/ShareNodes')
```



| Illustration | ShareNodes |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ShareNodes.png) | ![illustration for ShareNodes](../../fontawesome/Solid/ShareNodes.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ShareNodesXs>`
- `<$ShareNodesSm>`
- `<$ShareNodesMd>`
- `<$ShareNodesLg>`





## ShareNodes

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ShareNodes
include('fontawesome/Solid/ShareNodes')

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
include('fontawesome/bootstrap')

' loads the Item which embeds the element ShareNodes
include('fontawesome/Solid/ShareNodes')

' renders the element
ShareNodes('ShareNodes', 'Share Nodes', 'an optional tech label', 'an optional description')
@enduml
```

