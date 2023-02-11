# Todoist


```text
simpleicons-8/T/Todoist
```

```text
include('simpleicons-8/T/Todoist')
```



| Illustration | Todoist |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/T/Todoist.png) | ![illustration for Todoist](../../simpleicons-8/T/Todoist.Local.png) |




## Todoist

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Todoist
include('simpleicons-8/T/Todoist')

' renders the element
Todoist('Todoist', 'Todoist', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Todoist
include('simpleicons-8/T/Todoist')

' renders the element
Todoist('Todoist', 'Todoist', 'an optional tech label', 'an optional description')
@enduml
```

