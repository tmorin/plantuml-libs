# Inbox


```text
fontawesome/Solid/Inbox
```

```text
include('fontawesome/Solid/Inbox')
```



| Illustration | Inbox |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Inbox.png) | ![illustration for Inbox](../../fontawesome/Solid/Inbox.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$InboxXs>`
- `<$InboxSm>`
- `<$InboxMd>`
- `<$InboxLg>`





## Inbox

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Inbox
include('fontawesome/Solid/Inbox')

' renders the element
Inbox('Inbox', 'Inbox', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Inbox
include('fontawesome/Solid/Inbox')

' renders the element
Inbox('Inbox', 'Inbox', 'an optional tech label', 'an optional description')
@enduml
```

