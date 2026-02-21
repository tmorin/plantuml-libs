# SyncDisabled


```text
material/Notification/SyncDisabled
```

```text
include('material/Notification/SyncDisabled')
```



| Illustration | SyncDisabled |
| :---: | :---: |
| ![illustration for Illustration](../../material/Notification/SyncDisabled.png) | ![illustration for SyncDisabled](../../material/Notification/SyncDisabled.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SyncDisabledXs>`
- `<$SyncDisabledSm>`
- `<$SyncDisabledMd>`
- `<$SyncDisabledLg>`





## SyncDisabled

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element SyncDisabled
include('material/Notification/SyncDisabled')

' renders the element
SyncDisabled('SyncDisabled', 'Sync Disabled', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element SyncDisabled
include('material/Notification/SyncDisabled')

' renders the element
SyncDisabled('SyncDisabled', 'Sync Disabled', 'an optional tech label', 'an optional description')
@enduml
```

