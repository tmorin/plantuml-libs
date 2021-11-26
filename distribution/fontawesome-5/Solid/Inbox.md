# Inbox


```text
fontawesome-5/Solid/Inbox
```

```text
include('fontawesome-5/Solid/Inbox')
```



| Illustration | Inbox |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Inbox.png) | ![illustration for Inbox](../../fontawesome-5/Solid/Inbox.Local.png) |




## Inbox

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Inbox
include('fontawesome-5/Solid/Inbox')

' renders the element
Inbox('Inbox', 'Inbox', 'an optional tech label')
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

' loads the Item which embeds the element Inbox
include('fontawesome-5/Solid/Inbox')

' renders the element
Inbox('Inbox', 'Inbox', 'an optional tech label')
@enduml
```

