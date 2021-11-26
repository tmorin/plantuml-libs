# SyncDisabled


```text
material-4/Notification/SyncDisabled
```

```text
include('material-4/Notification/SyncDisabled')
```



| Illustration | SyncDisabled |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Notification/SyncDisabled.png) | ![illustration for SyncDisabled](../../material-4/Notification/SyncDisabled.Local.png) |




## SyncDisabled

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SyncDisabled
include('material-4/Notification/SyncDisabled')

' renders the element
SyncDisabled('SyncDisabled', 'Sync Disabled', 'an optional tech label')
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

' loads the Item which embeds the element SyncDisabled
include('material-4/Notification/SyncDisabled')

' renders the element
SyncDisabled('SyncDisabled', 'Sync Disabled', 'an optional tech label')
@enduml
```

