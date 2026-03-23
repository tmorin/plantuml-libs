# HexagonNodes


```text
fontawesome/Solid/HexagonNodes
```

```text
include('fontawesome/Solid/HexagonNodes')
```



| Illustration | HexagonNodes |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HexagonNodes.png) | ![illustration for HexagonNodes](../../fontawesome/Solid/HexagonNodes.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HexagonNodesXs>`
- `<$HexagonNodesSm>`
- `<$HexagonNodesMd>`
- `<$HexagonNodesLg>`





## HexagonNodes

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HexagonNodes
include('fontawesome/Solid/HexagonNodes')

' renders the element
HexagonNodes('HexagonNodes', 'Hexagon Nodes', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HexagonNodes
include('fontawesome/Solid/HexagonNodes')

' renders the element
HexagonNodes('HexagonNodes', 'Hexagon Nodes', 'an optional tech label', 'an optional description')
@enduml
```

