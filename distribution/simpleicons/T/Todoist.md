# Todoist


```text
simpleicons/T/Todoist
```

```text
include('simpleicons/T/Todoist')
```



| Illustration | Todoist |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Todoist.png) | ![illustration for Todoist](../../simpleicons/T/Todoist.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Todoist
include('simpleicons/T/Todoist')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Todoist
include('simpleicons/T/Todoist')

' renders the element
Todoist('Todoist', 'Todoist', 'an optional tech label', 'an optional description')
@enduml
```

