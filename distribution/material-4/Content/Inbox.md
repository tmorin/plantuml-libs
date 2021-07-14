# Inbox


```text
material-4/Content/Inbox
```

```text
include('material-4/Content/Inbox')
```



| Illustration | Inbox |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Content/Inbox.png) | ![illustration for Inbox](../../material-4/Content/Inbox.Local.png) |




## Inbox

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Inbox
include('material-4/Content/Inbox')

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
include('material-4/bootstrap')

' loads the Item which embeds the element Inbox
include('material-4/Content/Inbox')

' renders the element
Inbox('Inbox', 'Inbox', 'an optional tech label')
@enduml
```

