# WindowRestore


```text
fontawesome/Solid/WindowRestore
```

```text
include('fontawesome/Solid/WindowRestore')
```



| Illustration | WindowRestore |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/WindowRestore.png) | ![illustration for WindowRestore](../../fontawesome/Solid/WindowRestore.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WindowRestoreXs>`
- `<$WindowRestoreSm>`
- `<$WindowRestoreMd>`
- `<$WindowRestoreLg>`





## WindowRestore

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element WindowRestore
include('fontawesome/Solid/WindowRestore')

' renders the element
WindowRestore('WindowRestore', 'Window Restore', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element WindowRestore
include('fontawesome/Solid/WindowRestore')

' renders the element
WindowRestore('WindowRestore', 'Window Restore', 'an optional tech label', 'an optional description')
@enduml
```

