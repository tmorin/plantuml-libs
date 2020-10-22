# Circle Notifications

```text
material-4.0/Action/CircleNotifications
```

```text
include('material-4.0/Action/CircleNotifications')
```

|icon|element|
|---|---|
|![](CircleNotifications.png)|![](CircleNotifications.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the material-4.0 bootstrap
include('material-4.0/bootstrap')
' loads the CircleNotifications element
include('material-4.0/Action/CircleNotifications')
CircleNotifications('circle_notifications', 'Circle Notifications', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the material-4.0 bootstrap
include('material-4.0/bootstrap')
' loads the CircleNotifications element
include('material-4.0/Action/CircleNotifications')
CircleNotifications('circle_notifications', 'Circle Notifications', 'an optional tech field')
@enduml
```

