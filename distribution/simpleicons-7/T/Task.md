# Task


```text
simpleicons-7/T/Task
```

```text
include('simpleicons-7/T/Task')
```



| Illustration | Task |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/T/Task.png) | ![illustration for Task](../../simpleicons-7/T/Task.Local.png) |




## Task

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Task
include('simpleicons-7/T/Task')

' renders the element
Task('Task', 'Task', 'an optional tech label')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Task
include('simpleicons-7/T/Task')

' renders the element
Task('Task', 'Task', 'an optional tech label')
@enduml
```

