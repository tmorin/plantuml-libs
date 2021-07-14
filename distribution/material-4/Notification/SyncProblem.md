# SyncProblem


```text
material-4/Notification/SyncProblem
```

```text
include('material-4/Notification/SyncProblem')
```



| Illustration | SyncProblem |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Notification/SyncProblem.png) | ![illustration for SyncProblem](../../material-4/Notification/SyncProblem.Local.png) |




## SyncProblem

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SyncProblem
include('material-4/Notification/SyncProblem')

' renders the element
SyncProblem('SyncProblem', 'Sync Problem', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element SyncProblem
include('material-4/Notification/SyncProblem')

' renders the element
SyncProblem('SyncProblem', 'Sync Problem', 'an optional tech label')
@enduml
```

