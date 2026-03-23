# MailReplyAll


```text
fontawesome/Solid/MailReplyAll
```

```text
include('fontawesome/Solid/MailReplyAll')
```



| Illustration | MailReplyAll |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/MailReplyAll.png) | ![illustration for MailReplyAll](../../fontawesome/Solid/MailReplyAll.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MailReplyAllXs>`
- `<$MailReplyAllSm>`
- `<$MailReplyAllMd>`
- `<$MailReplyAllLg>`





## MailReplyAll

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element MailReplyAll
include('fontawesome/Solid/MailReplyAll')

' renders the element
MailReplyAll('MailReplyAll', 'Mail Reply All', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MailReplyAll
include('fontawesome/Solid/MailReplyAll')

' renders the element
MailReplyAll('MailReplyAll', 'Mail Reply All', 'an optional tech label', 'an optional description')
@enduml
```

