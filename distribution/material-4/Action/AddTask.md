# AddTask


```text
material-4/Action/AddTask
```

```text
include('material-4/Action/AddTask')
```



| Illustration | AddTask |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/AddTask.png) | ![illustration for AddTask](../../material-4/Action/AddTask.Local.png) |




## AddTask

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AddTask
include('material-4/Action/AddTask')

' renders the element
AddTask('AddTask', 'Add Task', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AddTask
include('material-4/Action/AddTask')

' renders the element
AddTask('AddTask', 'Add Task', 'an optional tech label', 'an optional description')
@enduml
```

