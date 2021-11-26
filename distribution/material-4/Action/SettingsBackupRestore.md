# SettingsBackupRestore


```text
material-4/Action/SettingsBackupRestore
```

```text
include('material-4/Action/SettingsBackupRestore')
```



| Illustration | SettingsBackupRestore |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/SettingsBackupRestore.png) | ![illustration for SettingsBackupRestore](../../material-4/Action/SettingsBackupRestore.Local.png) |




## SettingsBackupRestore

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SettingsBackupRestore
include('material-4/Action/SettingsBackupRestore')

' renders the element
SettingsBackupRestore('SettingsBackupRestore', 'Settings Backup Restore', 'an optional tech label')
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

' loads the Item which embeds the element SettingsBackupRestore
include('material-4/Action/SettingsBackupRestore')

' renders the element
SettingsBackupRestore('SettingsBackupRestore', 'Settings Backup Restore', 'an optional tech label')
@enduml
```

