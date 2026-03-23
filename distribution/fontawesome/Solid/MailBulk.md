# MailBulk


```text
fontawesome/Solid/MailBulk
```

```text
include('fontawesome/Solid/MailBulk')
```



| Illustration | MailBulk |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/MailBulk.png) | ![illustration for MailBulk](../../fontawesome/Solid/MailBulk.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MailBulkXs>`
- `<$MailBulkSm>`
- `<$MailBulkMd>`
- `<$MailBulkLg>`





## MailBulk

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element MailBulk
include('fontawesome/Solid/MailBulk')

' renders the element
MailBulk('MailBulk', 'Mail Bulk', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MailBulk
include('fontawesome/Solid/MailBulk')

' renders the element
MailBulk('MailBulk', 'Mail Bulk', 'an optional tech label', 'an optional description')
@enduml
```

