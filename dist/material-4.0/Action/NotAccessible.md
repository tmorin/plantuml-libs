# Not Accessible

```text
material-4.0/Action/NotAccessible
```

```text
include('material-4.0/Action/NotAccessible')
```

|icon|element|
|---|---|
|![](NotAccessible.png)|![](NotAccessible.element.png)|



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
' loads the NotAccessible element
include('material-4.0/Action/NotAccessible')
NotAccessible('not_accessible', 'Not Accessible', 'an optional tech field')
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
' loads the NotAccessible element
include('material-4.0/Action/NotAccessible')
NotAccessible('not_accessible', 'Not Accessible', 'an optional tech field')
@enduml
```

