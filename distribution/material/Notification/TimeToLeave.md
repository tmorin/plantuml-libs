# TimeToLeave


```text
material/Notification/TimeToLeave
```

```text
include('material/Notification/TimeToLeave')
```



| Illustration | TimeToLeave |
| :---: | :---: |
| ![illustration for Illustration](../../material/Notification/TimeToLeave.png) | ![illustration for TimeToLeave](../../material/Notification/TimeToLeave.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TimeToLeaveXs>`
- `<$TimeToLeaveSm>`
- `<$TimeToLeaveMd>`
- `<$TimeToLeaveLg>`





## TimeToLeave

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element TimeToLeave
include('material/Notification/TimeToLeave')

' renders the element
TimeToLeave('TimeToLeave', 'Time To Leave', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TimeToLeave
include('material/Notification/TimeToLeave')

' renders the element
TimeToLeave('TimeToLeave', 'Time To Leave', 'an optional tech label', 'an optional description')
@enduml
```

