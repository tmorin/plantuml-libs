# Backup


```text
material/Action/Backup
```

```text
include('material/Action/Backup')
```



| Illustration | Backup |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/Backup.png) | ![illustration for Backup](../../material/Action/Backup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BackupXs>`
- `<$BackupSm>`
- `<$BackupMd>`
- `<$BackupLg>`





## Backup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Backup
include('material/Action/Backup')

' renders the element
Backup('Backup', 'Backup', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Backup
include('material/Action/Backup')

' renders the element
Backup('Backup', 'Backup', 'an optional tech label', 'an optional description')
@enduml
```

