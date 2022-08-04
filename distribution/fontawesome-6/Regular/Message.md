# Message


```text
fontawesome-6/Regular/Message
```

```text
include('fontawesome-6/Regular/Message')
```



| Illustration | Message |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Regular/Message.png) | ![illustration for Message](../../fontawesome-6/Regular/Message.Local.png) |




## Message

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Message
include('fontawesome-6/Regular/Message')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Message
include('fontawesome-6/Regular/Message')

' renders the element
Message('Message', 'Message', 'an optional tech label', 'an optional description')
@enduml
```

