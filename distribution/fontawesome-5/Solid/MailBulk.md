# MailBulk


```text
fontawesome-5/Solid/MailBulk
```

```text
include('fontawesome-5/Solid/MailBulk')
```



| Illustration | MailBulk |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/MailBulk.png) | ![illustration for MailBulk](../../fontawesome-5/Solid/MailBulk.Local.png) |




## MailBulk

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element MailBulk
include('fontawesome-5/Solid/MailBulk')

' renders the element
MailBulk('MailBulk', 'Mail Bulk', 'an optional tech label')
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

' loads the Item which embeds the element MailBulk
include('fontawesome-5/Solid/MailBulk')

' renders the element
MailBulk('MailBulk', 'Mail Bulk', 'an optional tech label')
@enduml
```

