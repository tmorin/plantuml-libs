# EventNote


```text
material-4/Notification/EventNote
```

```text
include('material-4/Notification/EventNote')
```



| Illustration | EventNote |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Notification/EventNote.png) | ![illustration for EventNote](../../material-4/Notification/EventNote.Local.png) |




## EventNote

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element EventNote
include('material-4/Notification/EventNote')

' renders the element
EventNote('EventNote', 'Event Note', 'an optional tech label')
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

' loads the Item which embeds the element EventNote
include('material-4/Notification/EventNote')

' renders the element
EventNote('EventNote', 'Event Note', 'an optional tech label')
@enduml
```

