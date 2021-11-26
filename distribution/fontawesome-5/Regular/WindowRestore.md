# WindowRestore


```text
fontawesome-5/Regular/WindowRestore
```

```text
include('fontawesome-5/Regular/WindowRestore')
```



| Illustration | WindowRestore |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/WindowRestore.png) | ![illustration for WindowRestore](../../fontawesome-5/Regular/WindowRestore.Local.png) |




## WindowRestore

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element WindowRestore
include('fontawesome-5/Regular/WindowRestore')

' renders the element
WindowRestore('WindowRestore', 'Window Restore', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element WindowRestore
include('fontawesome-5/Regular/WindowRestore')

' renders the element
WindowRestore('WindowRestore', 'Window Restore', 'an optional tech label')
@enduml
```

