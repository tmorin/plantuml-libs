# Notification Important

```text
material-4.0/Alert/NotificationImportant
```

```text
include('material-4.0/Alert/NotificationImportant')
```

|icon|element|
|---|---|
|![](NotificationImportant.png)|![](NotificationImportant.element.png)|



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
' loads the NotificationImportant element
include('material-4.0/Alert/NotificationImportant')
NotificationImportant('notification_important', 'Notification Important', 'an optional tech field')
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
' loads the NotificationImportant element
include('material-4.0/Alert/NotificationImportant')
NotificationImportant('notification_important', 'Notification Important', 'an optional tech field')
@enduml
```

