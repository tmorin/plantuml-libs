# CircleNotifications


```text
material/Action/CircleNotifications
```

```text
include('material/Action/CircleNotifications')
```



| Illustration | CircleNotifications |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/CircleNotifications.png) | ![illustration for CircleNotifications](../../material/Action/CircleNotifications.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CircleNotificationsXs>`
- `<$CircleNotificationsSm>`
- `<$CircleNotificationsMd>`
- `<$CircleNotificationsLg>`





## CircleNotifications

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element CircleNotifications
include('material/Action/CircleNotifications')

' renders the element
CircleNotifications('CircleNotifications', 'Circle Notifications', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element CircleNotifications
include('material/Action/CircleNotifications')

' renders the element
CircleNotifications('CircleNotifications', 'Circle Notifications', 'an optional tech label', 'an optional description')
@enduml
```

