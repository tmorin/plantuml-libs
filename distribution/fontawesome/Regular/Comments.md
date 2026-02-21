# Comments


```text
fontawesome/Regular/Comments
```

```text
include('fontawesome/Regular/Comments')
```



| Illustration | Comments |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/Comments.png) | ![illustration for Comments](../../fontawesome/Regular/Comments.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CommentsXs>`
- `<$CommentsSm>`
- `<$CommentsMd>`
- `<$CommentsLg>`





## Comments

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Comments
include('fontawesome/Regular/Comments')

' renders the element
Comments('Comments', 'Comments', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Comments
include('fontawesome/Regular/Comments')

' renders the element
Comments('Comments', 'Comments', 'an optional tech label', 'an optional description')
@enduml
```

