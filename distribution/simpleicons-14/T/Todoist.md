# Todoist


```text
simpleicons-14/T/Todoist
```

```text
include('simpleicons-14/T/Todoist')
```



| Illustration | Todoist |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Todoist.png) | ![illustration for Todoist](../../simpleicons-14/T/Todoist.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TodoistXs>`
- `<$TodoistSm>`
- `<$TodoistMd>`
- `<$TodoistLg>`





## Todoist

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Todoist
include('simpleicons-14/T/Todoist')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Todoist
include('simpleicons-14/T/Todoist')

' renders the element
Todoist('Todoist', 'Todoist', 'an optional tech label', 'an optional description')
@enduml
```

