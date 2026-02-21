# AddComment


```text
material/Editor/AddComment
```

```text
include('material/Editor/AddComment')
```



| Illustration | AddComment |
| :---: | :---: |
| ![illustration for Illustration](../../material/Editor/AddComment.png) | ![illustration for AddComment](../../material/Editor/AddComment.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AddCommentXs>`
- `<$AddCommentSm>`
- `<$AddCommentMd>`
- `<$AddCommentLg>`





## AddComment

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element AddComment
include('material/Editor/AddComment')

' renders the element
AddComment('AddComment', 'Add Comment', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element AddComment
include('material/Editor/AddComment')

' renders the element
AddComment('AddComment', 'Add Comment', 'an optional tech label', 'an optional description')
@enduml
```

