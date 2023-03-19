# EventBusy


```text
material-4/Notification/EventBusy
```

```text
include('material-4/Notification/EventBusy')
```



| Illustration | EventBusy |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Notification/EventBusy.png) | ![illustration for EventBusy](../../material-4/Notification/EventBusy.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EventBusyXs>`
- `<$EventBusySm>`
- `<$EventBusyMd>`
- `<$EventBusyLg>`





## EventBusy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element EventBusy
include('material-4/Notification/EventBusy')

' renders the element
EventBusy('EventBusy', 'Event Busy', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element EventBusy
include('material-4/Notification/EventBusy')

' renders the element
EventBusy('EventBusy', 'Event Busy', 'an optional tech label', 'an optional description')
@enduml
```

