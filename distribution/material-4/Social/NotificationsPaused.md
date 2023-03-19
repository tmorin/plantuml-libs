# NotificationsPaused


```text
material-4/Social/NotificationsPaused
```

```text
include('material-4/Social/NotificationsPaused')
```



| Illustration | NotificationsPaused |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/NotificationsPaused.png) | ![illustration for NotificationsPaused](../../material-4/Social/NotificationsPaused.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NotificationsPausedXs>`
- `<$NotificationsPausedSm>`
- `<$NotificationsPausedMd>`
- `<$NotificationsPausedLg>`





## NotificationsPaused

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element NotificationsPaused
include('material-4/Social/NotificationsPaused')

' renders the element
NotificationsPaused('NotificationsPaused', 'Notifications Paused', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element NotificationsPaused
include('material-4/Social/NotificationsPaused')

' renders the element
NotificationsPaused('NotificationsPaused', 'Notifications Paused', 'an optional tech label', 'an optional description')
@enduml
```

