# Event


```text
material-4/Action/Event
```

```text
include('material-4/Action/Event')
```



| Illustration | Event |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Event.png) | ![illustration for Event](../../material-4/Action/Event.Local.png) |




## Event

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Event
include('material-4/Action/Event')

' renders the element
Event('Event', 'Event', 'an optional tech label')
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

' loads the Item which embeds the element Event
include('material-4/Action/Event')

' renders the element
Event('Event', 'Event', 'an optional tech label')
@enduml
```

