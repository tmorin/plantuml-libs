# NotificationsNone


```text
material-4/Social/NotificationsNone
```

```text
include('material-4/Social/NotificationsNone')
```



| Illustration | NotificationsNone |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/NotificationsNone.png) | ![illustration for NotificationsNone](../../material-4/Social/NotificationsNone.Local.png) |




## NotificationsNone

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element NotificationsNone
include('material-4/Social/NotificationsNone')

' renders the element
NotificationsNone('NotificationsNone', 'Notifications None', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element NotificationsNone
include('material-4/Social/NotificationsNone')

' renders the element
NotificationsNone('NotificationsNone', 'Notifications None', 'an optional tech label', 'an optional description')
@enduml
```

