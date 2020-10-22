# Mark Email Unread

```text
material-4.0/Communication/MarkEmailUnread
```

```text
include('material-4.0/Communication/MarkEmailUnread')
```

|icon|element|
|---|---|
|![](MarkEmailUnread.png)|![](MarkEmailUnread.element.png)|



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
' loads the MarkEmailUnread element
include('material-4.0/Communication/MarkEmailUnread')
MarkEmailUnread('mark_email_unread', 'Mark Email Unread', 'an optional tech field')
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
' loads the MarkEmailUnread element
include('material-4.0/Communication/MarkEmailUnread')
MarkEmailUnread('mark_email_unread', 'Mark Email Unread', 'an optional tech field')
@enduml
```

