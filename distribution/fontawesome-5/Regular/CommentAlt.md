# CommentAlt


```text
fontawesome-5/Regular/CommentAlt
```

```text
include('fontawesome-5/Regular/CommentAlt')
```



| Illustration | CommentAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/CommentAlt.png) | ![illustration for CommentAlt](../../fontawesome-5/Regular/CommentAlt.Local.png) |




## CommentAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CommentAlt
include('fontawesome-5/Regular/CommentAlt')

' renders the element
CommentAlt('CommentAlt', 'Comment Alt', 'an optional tech label')
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

' loads the Item which embeds the element CommentAlt
include('fontawesome-5/Regular/CommentAlt')

' renders the element
CommentAlt('CommentAlt', 'Comment Alt', 'an optional tech label')
@enduml
```

