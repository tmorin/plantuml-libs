# CommentsDollar


```text
fontawesome-5/Solid/CommentsDollar
```

```text
include('fontawesome-5/Solid/CommentsDollar')
```



| Illustration | CommentsDollar |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/CommentsDollar.png) | ![illustration for CommentsDollar](../../fontawesome-5/Solid/CommentsDollar.Local.png) |




## CommentsDollar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CommentsDollar
include('fontawesome-5/Solid/CommentsDollar')

' renders the element
CommentsDollar('CommentsDollar', 'Comments Dollar', 'an optional tech label')
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

' loads the Item which embeds the element CommentsDollar
include('fontawesome-5/Solid/CommentsDollar')

' renders the element
CommentsDollar('CommentsDollar', 'Comments Dollar', 'an optional tech label')
@enduml
```

