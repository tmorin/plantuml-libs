# Mailbox


```text
simpleicons-14/M/Mailbox
```

```text
include('simpleicons-14/M/Mailbox')
```



| Illustration | Mailbox |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Mailbox.png) | ![illustration for Mailbox](../../simpleicons-14/M/Mailbox.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MailboxXs>`
- `<$MailboxSm>`
- `<$MailboxMd>`
- `<$MailboxLg>`





## Mailbox

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Mailbox
include('simpleicons-14/M/Mailbox')

' renders the element
Mailbox('Mailbox', 'Mailbox', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Mailbox
include('simpleicons-14/M/Mailbox')

' renders the element
Mailbox('Mailbox', 'Mailbox', 'an optional tech label', 'an optional description')
@enduml
```

