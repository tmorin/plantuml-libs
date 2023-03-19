# Notifications


```text
material-4/Social/Notifications
```

```text
include('material-4/Social/Notifications')
```



| Illustration | Notifications |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/Notifications.png) | ![illustration for Notifications](../../material-4/Social/Notifications.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NotificationsXs>`
- `<$NotificationsSm>`
- `<$NotificationsMd>`
- `<$NotificationsLg>`





## Notifications

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Notifications
include('material-4/Social/Notifications')

' renders the element
Notifications('Notifications', 'Notifications', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Notifications
include('material-4/Social/Notifications')

' renders the element
Notifications('Notifications', 'Notifications', 'an optional tech label', 'an optional description')
@enduml
```

