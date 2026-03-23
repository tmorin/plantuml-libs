# CommentNodes


```text
fontawesome/Solid/CommentNodes
```

```text
include('fontawesome/Solid/CommentNodes')
```



| Illustration | CommentNodes |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/CommentNodes.png) | ![illustration for CommentNodes](../../fontawesome/Solid/CommentNodes.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CommentNodesXs>`
- `<$CommentNodesSm>`
- `<$CommentNodesMd>`
- `<$CommentNodesLg>`





## CommentNodes

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CommentNodes
include('fontawesome/Solid/CommentNodes')

' renders the element
CommentNodes('CommentNodes', 'Comment Nodes', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CommentNodes
include('fontawesome/Solid/CommentNodes')

' renders the element
CommentNodes('CommentNodes', 'Comment Nodes', 'an optional tech label', 'an optional description')
@enduml
```

