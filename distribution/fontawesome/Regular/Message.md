# Message


```text
fontawesome/Regular/Message
```

```text
include('fontawesome/Regular/Message')
```



| Illustration | Message |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/Message.png) | ![illustration for Message](../../fontawesome/Regular/Message.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MessageXs>`
- `<$MessageSm>`
- `<$MessageMd>`
- `<$MessageLg>`





## Message

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Message
include('fontawesome/Regular/Message')

' renders the element
Message('Message', 'Message', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Message
include('fontawesome/Regular/Message')

' renders the element
Message('Message', 'Message', 'an optional tech label', 'an optional description')
@enduml
```

