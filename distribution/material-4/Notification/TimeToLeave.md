# TimeToLeave


```text
material-4/Notification/TimeToLeave
```

```text
include('material-4/Notification/TimeToLeave')
```



| Illustration | TimeToLeave |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Notification/TimeToLeave.png) | ![illustration for TimeToLeave](../../material-4/Notification/TimeToLeave.Local.png) |




## TimeToLeave

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element TimeToLeave
include('material-4/Notification/TimeToLeave')

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
include('material-4/bootstrap')

' loads the Item which embeds the element TimeToLeave
include('material-4/Notification/TimeToLeave')

' renders the element
TimeToLeave('TimeToLeave', 'Time To Leave', 'an optional tech label', 'an optional description')
@enduml
```

