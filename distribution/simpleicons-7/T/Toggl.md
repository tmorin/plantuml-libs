# Toggl


```text
simpleicons-7/T/Toggl
```

```text
include('simpleicons-7/T/Toggl')
```



| Illustration | Toggl |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/T/Toggl.png) | ![illustration for Toggl](../../simpleicons-7/T/Toggl.Local.png) |




## Toggl

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Toggl
include('simpleicons-7/T/Toggl')

' renders the element
Toggl('Toggl', 'Toggl', 'an optional tech label')
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

' loads the Item which embeds the element Toggl
include('simpleicons-7/T/Toggl')

' renders the element
Toggl('Toggl', 'Toggl', 'an optional tech label')
@enduml
```

