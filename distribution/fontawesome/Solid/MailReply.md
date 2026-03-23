# MailReply


```text
fontawesome/Solid/MailReply
```

```text
include('fontawesome/Solid/MailReply')
```



| Illustration | MailReply |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/MailReply.png) | ![illustration for MailReply](../../fontawesome/Solid/MailReply.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MailReplyXs>`
- `<$MailReplySm>`
- `<$MailReplyMd>`
- `<$MailReplyLg>`





## MailReply

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element MailReply
include('fontawesome/Solid/MailReply')

' renders the element
MailReply('MailReply', 'Mail Reply', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MailReply
include('fontawesome/Solid/MailReply')

' renders the element
MailReply('MailReply', 'Mail Reply', 'an optional tech label', 'an optional description')
@enduml
```

