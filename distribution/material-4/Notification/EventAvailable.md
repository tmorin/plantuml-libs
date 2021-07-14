# EventAvailable


```text
material-4/Notification/EventAvailable
```

```text
include('material-4/Notification/EventAvailable')
```



| Illustration | EventAvailable |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Notification/EventAvailable.png) | ![illustration for EventAvailable](../../material-4/Notification/EventAvailable.Local.png) |




## EventAvailable

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element EventAvailable
include('material-4/Notification/EventAvailable')

' renders the element
EventAvailable('EventAvailable', 'Event Available', 'an optional tech label')
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

' loads the Item which embeds the element EventAvailable
include('material-4/Notification/EventAvailable')

' renders the element
EventAvailable('EventAvailable', 'Event Available', 'an optional tech label')
@enduml
```

