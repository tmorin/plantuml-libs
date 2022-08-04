# CommentSms


```text
fontawesome-6/Solid/CommentSms
```

```text
include('fontawesome-6/Solid/CommentSms')
```



| Illustration | CommentSms |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/CommentSms.png) | ![illustration for CommentSms](../../fontawesome-6/Solid/CommentSms.Local.png) |




## CommentSms

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CommentSms
include('fontawesome-6/Solid/CommentSms')

' renders the element
CommentSms('CommentSms', 'Comment Sms', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CommentSms
include('fontawesome-6/Solid/CommentSms')

' renders the element
CommentSms('CommentSms', 'Comment Sms', 'an optional tech label', 'an optional description')
@enduml
```

