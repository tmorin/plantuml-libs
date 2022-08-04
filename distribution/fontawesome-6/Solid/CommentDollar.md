# CommentDollar


```text
fontawesome-6/Solid/CommentDollar
```

```text
include('fontawesome-6/Solid/CommentDollar')
```



| Illustration | CommentDollar |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/CommentDollar.png) | ![illustration for CommentDollar](../../fontawesome-6/Solid/CommentDollar.Local.png) |




## CommentDollar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CommentDollar
include('fontawesome-6/Solid/CommentDollar')

' renders the element
CommentDollar('CommentDollar', 'Comment Dollar', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CommentDollar
include('fontawesome-6/Solid/CommentDollar')

' renders the element
CommentDollar('CommentDollar', 'Comment Dollar', 'an optional tech label', 'an optional description')
@enduml
```

