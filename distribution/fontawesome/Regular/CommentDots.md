# CommentDots


```text
fontawesome/Regular/CommentDots
```

```text
include('fontawesome/Regular/CommentDots')
```



| Illustration | CommentDots |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/CommentDots.png) | ![illustration for CommentDots](../../fontawesome/Regular/CommentDots.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CommentDotsXs>`
- `<$CommentDotsSm>`
- `<$CommentDotsMd>`
- `<$CommentDotsLg>`





## CommentDots

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CommentDots
include('fontawesome/Regular/CommentDots')

' renders the element
CommentDots('CommentDots', 'Comment Dots', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CommentDots
include('fontawesome/Regular/CommentDots')

' renders the element
CommentDots('CommentDots', 'Comment Dots', 'an optional tech label', 'an optional description')
@enduml
```

