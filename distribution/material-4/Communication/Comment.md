# Comment


```text
material-4/Communication/Comment
```

```text
include('material-4/Communication/Comment')
```



| Illustration | Comment |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Communication/Comment.png) | ![illustration for Comment](../../material-4/Communication/Comment.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CommentXs>`
- `<$CommentSm>`
- `<$CommentMd>`
- `<$CommentLg>`





## Comment

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Comment
include('material-4/Communication/Comment')

' renders the element
Comment('Comment', 'Comment', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element Comment
include('material-4/Communication/Comment')

' renders the element
Comment('Comment', 'Comment', 'an optional tech label', 'an optional description')
@enduml
```

