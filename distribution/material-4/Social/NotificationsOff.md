# NotificationsOff


```text
material-4/Social/NotificationsOff
```

```text
include('material-4/Social/NotificationsOff')
```



| Illustration | NotificationsOff |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/NotificationsOff.png) | ![illustration for NotificationsOff](../../material-4/Social/NotificationsOff.Local.png) |




## NotificationsOff

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element NotificationsOff
include('material-4/Social/NotificationsOff')

' renders the element
NotificationsOff('NotificationsOff', 'Notifications Off', 'an optional tech label')
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

' loads the Item which embeds the element NotificationsOff
include('material-4/Social/NotificationsOff')

' renders the element
NotificationsOff('NotificationsOff', 'Notifications Off', 'an optional tech label')
@enduml
```

