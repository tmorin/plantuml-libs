# Node


```text
fontawesome/Brands/Node
```

```text
include('fontawesome/Brands/Node')
```



| Illustration | Node |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Node.png) | ![illustration for Node](../../fontawesome/Brands/Node.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NodeXs>`
- `<$NodeSm>`
- `<$NodeMd>`
- `<$NodeLg>`





## Node

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Node
include('fontawesome/Brands/Node')

' renders the element
Node('Node', 'Node', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Node
include('fontawesome/Brands/Node')

' renders the element
Node('Node', 'Node', 'an optional tech label', 'an optional description')
@enduml
```

