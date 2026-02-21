# BackupTable


```text
material/Action/BackupTable
```

```text
include('material/Action/BackupTable')
```



| Illustration | BackupTable |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/BackupTable.png) | ![illustration for BackupTable](../../material/Action/BackupTable.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BackupTableXs>`
- `<$BackupTableSm>`
- `<$BackupTableMd>`
- `<$BackupTableLg>`





## BackupTable

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element BackupTable
include('material/Action/BackupTable')

' renders the element
BackupTable('BackupTable', 'Backup Table', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BackupTable
include('material/Action/BackupTable')

' renders the element
BackupTable('BackupTable', 'Backup Table', 'an optional tech label', 'an optional description')
@enduml
```

