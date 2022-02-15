# Comment


```text
fontawesome-6/Solid/Comment
```

```text
include('fontawesome-6/Solid/Comment')
```



| Illustration | Comment |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Comment.png) | ![illustration for Comment](../../fontawesome-6/Solid/Comment.Local.png) |




## Comment

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Comment
include('fontawesome-6/Solid/Comment')

' renders the element
Comment('Comment', 'Comment', 'an optional tech label')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Comment
include('fontawesome-6/Solid/Comment')

' renders the element
Comment('Comment', 'Comment', 'an optional tech label')
@enduml
```

