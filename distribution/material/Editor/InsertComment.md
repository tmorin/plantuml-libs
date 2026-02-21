# InsertComment


```text
material/Editor/InsertComment
```

```text
include('material/Editor/InsertComment')
```



| Illustration | InsertComment |
| :---: | :---: |
| ![illustration for Illustration](../../material/Editor/InsertComment.png) | ![illustration for InsertComment](../../material/Editor/InsertComment.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$InsertCommentXs>`
- `<$InsertCommentSm>`
- `<$InsertCommentMd>`
- `<$InsertCommentLg>`





## InsertComment

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element InsertComment
include('material/Editor/InsertComment')

' renders the element
InsertComment('InsertComment', 'Insert Comment', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element InsertComment
include('material/Editor/InsertComment')

' renders the element
InsertComment('InsertComment', 'Insert Comment', 'an optional tech label', 'an optional description')
@enduml
```

