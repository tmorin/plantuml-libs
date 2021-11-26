# CommentMedical


```text
fontawesome-5/Solid/CommentMedical
```

```text
include('fontawesome-5/Solid/CommentMedical')
```



| Illustration | CommentMedical |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/CommentMedical.png) | ![illustration for CommentMedical](../../fontawesome-5/Solid/CommentMedical.Local.png) |




## CommentMedical

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CommentMedical
include('fontawesome-5/Solid/CommentMedical')

' renders the element
CommentMedical('CommentMedical', 'Comment Medical', 'an optional tech label')
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

' loads the Item which embeds the element CommentMedical
include('fontawesome-5/Solid/CommentMedical')

' renders the element
CommentMedical('CommentMedical', 'Comment Medical', 'an optional tech label')
@enduml
```

