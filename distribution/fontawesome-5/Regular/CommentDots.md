# CommentDots


```text
fontawesome-5/Regular/CommentDots
```

```text
include('fontawesome-5/Regular/CommentDots')
```



| Illustration | CommentDots |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/CommentDots.png) | ![illustration for CommentDots](../../fontawesome-5/Regular/CommentDots.Local.png) |




## CommentDots

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CommentDots
include('fontawesome-5/Regular/CommentDots')

' renders the element
CommentDots('CommentDots', 'Comment Dots', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CommentDots
include('fontawesome-5/Regular/CommentDots')

' renders the element
CommentDots('CommentDots', 'Comment Dots', 'an optional tech label')
@enduml
```

