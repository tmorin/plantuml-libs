# SettingsBackupRestore


```text
material/Action/SettingsBackupRestore
```

```text
include('material/Action/SettingsBackupRestore')
```



| Illustration | SettingsBackupRestore |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/SettingsBackupRestore.png) | ![illustration for SettingsBackupRestore](../../material/Action/SettingsBackupRestore.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SettingsBackupRestoreXs>`
- `<$SettingsBackupRestoreSm>`
- `<$SettingsBackupRestoreMd>`
- `<$SettingsBackupRestoreLg>`





## SettingsBackupRestore

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element SettingsBackupRestore
include('material/Action/SettingsBackupRestore')

' renders the element
SettingsBackupRestore('SettingsBackupRestore', 'Settings Backup Restore', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SettingsBackupRestore
include('material/Action/SettingsBackupRestore')

' renders the element
SettingsBackupRestore('SettingsBackupRestore', 'Settings Backup Restore', 'an optional tech label', 'an optional description')
@enduml
```

