# NotificationsActive


```text
material/Social/NotificationsActive
```

```text
include('material/Social/NotificationsActive')
```



| Illustration | NotificationsActive |
| :---: | :---: |
| ![illustration for Illustration](../../material/Social/NotificationsActive.png) | ![illustration for NotificationsActive](../../material/Social/NotificationsActive.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NotificationsActiveXs>`
- `<$NotificationsActiveSm>`
- `<$NotificationsActiveMd>`
- `<$NotificationsActiveLg>`





## NotificationsActive

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element NotificationsActive
include('material/Social/NotificationsActive')

' renders the element
NotificationsActive('NotificationsActive', 'Notifications Active', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element NotificationsActive
include('material/Social/NotificationsActive')

' renders the element
NotificationsActive('NotificationsActive', 'Notifications Active', 'an optional tech label', 'an optional description')
@enduml
```

