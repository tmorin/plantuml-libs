# Toggl


```text
simpleicons-14/T/Toggl
```

```text
include('simpleicons-14/T/Toggl')
```



| Illustration | Toggl |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Toggl.png) | ![illustration for Toggl](../../simpleicons-14/T/Toggl.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TogglXs>`
- `<$TogglSm>`
- `<$TogglMd>`
- `<$TogglLg>`





## Toggl

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Toggl
include('simpleicons-14/T/Toggl')

' renders the element
Toggl('Toggl', 'Toggl', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Toggl
include('simpleicons-14/T/Toggl')

' renders the element
Toggl('Toggl', 'Toggl', 'an optional tech label', 'an optional description')
@enduml
```

