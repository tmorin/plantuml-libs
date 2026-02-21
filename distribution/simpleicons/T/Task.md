# Task


```text
simpleicons/T/Task
```

```text
include('simpleicons/T/Task')
```



| Illustration | Task |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Task.png) | ![illustration for Task](../../simpleicons/T/Task.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TaskXs>`
- `<$TaskSm>`
- `<$TaskMd>`
- `<$TaskLg>`





## Task

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Task
include('simpleicons/T/Task')

' renders the element
Task('Task', 'Task', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Task
include('simpleicons/T/Task')

' renders the element
Task('Task', 'Task', 'an optional tech label', 'an optional description')
@enduml
```

