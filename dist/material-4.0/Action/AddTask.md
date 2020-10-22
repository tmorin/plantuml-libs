# Add Task

```text
material-4.0/Action/AddTask
```

```text
include('material-4.0/Action/AddTask')
```

|icon|element|
|---|---|
|![](AddTask.png)|![](AddTask.element.png)|



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
' loads the AddTask element
include('material-4.0/Action/AddTask')
AddTask('add_task', 'Add Task', 'an optional tech field')
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
' loads the AddTask element
include('material-4.0/Action/AddTask')
AddTask('add_task', 'Add Task', 'an optional tech field')
@enduml
```

