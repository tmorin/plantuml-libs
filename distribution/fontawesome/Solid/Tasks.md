# Tasks


```text
fontawesome/Solid/Tasks
```

```text
include('fontawesome/Solid/Tasks')
```



| Illustration | Tasks |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Tasks.png) | ![illustration for Tasks](../../fontawesome/Solid/Tasks.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TasksXs>`
- `<$TasksSm>`
- `<$TasksMd>`
- `<$TasksLg>`





## Tasks

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Tasks
include('fontawesome/Solid/Tasks')

' renders the element
Tasks('Tasks', 'Tasks', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Tasks
include('fontawesome/Solid/Tasks')

' renders the element
Tasks('Tasks', 'Tasks', 'an optional tech label', 'an optional description')
@enduml
```

