# NotificationsActive


```text
material-4/Social/NotificationsActive
```

```text
include('material-4/Social/NotificationsActive')
```



| Illustration | NotificationsActive |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/NotificationsActive.png) | ![illustration for NotificationsActive](../../material-4/Social/NotificationsActive.Local.png) |




## NotificationsActive

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element NotificationsActive
include('material-4/Social/NotificationsActive')

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
include('material-4/bootstrap')

' loads the Item which embeds the element NotificationsActive
include('material-4/Social/NotificationsActive')

' renders the element
NotificationsActive('NotificationsActive', 'Notifications Active', 'an optional tech label', 'an optional description')
@enduml
```

