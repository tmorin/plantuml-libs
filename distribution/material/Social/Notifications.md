# Notifications


```text
material/Social/Notifications
```

```text
include('material/Social/Notifications')
```



| Illustration | Notifications |
| :---: | :---: |
| ![illustration for Illustration](../../material/Social/Notifications.png) | ![illustration for Notifications](../../material/Social/Notifications.Local.png) |



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
include('material/bootstrap')

' loads the Item which embeds the element Notifications
include('material/Social/Notifications')

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
include('material/bootstrap')

' loads the Item which embeds the element Notifications
include('material/Social/Notifications')

' renders the element
Notifications('Notifications', 'Notifications', 'an optional tech label', 'an optional description')
@enduml
```

