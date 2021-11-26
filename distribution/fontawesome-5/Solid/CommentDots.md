# CommentDots


```text
fontawesome-5/Solid/CommentDots
```

```text
include('fontawesome-5/Solid/CommentDots')
```



| Illustration | CommentDots |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/CommentDots.png) | ![illustration for CommentDots](../../fontawesome-5/Solid/CommentDots.Local.png) |




## CommentDots

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CommentDots
include('fontawesome-5/Solid/CommentDots')

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
include('fontawesome-5/Solid/CommentDots')

' renders the element
CommentDots('CommentDots', 'Comment Dots', 'an optional tech label')
@enduml
```

