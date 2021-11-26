# BackupTable


```text
material-4/Action/BackupTable
```

```text
include('material-4/Action/BackupTable')
```



| Illustration | BackupTable |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/BackupTable.png) | ![illustration for BackupTable](../../material-4/Action/BackupTable.Local.png) |




## BackupTable

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element BackupTable
include('material-4/Action/BackupTable')

' renders the element
BackupTable('BackupTable', 'Backup Table', 'an optional tech label')
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

' loads the Item which embeds the element BackupTable
include('material-4/Action/BackupTable')

' renders the element
BackupTable('BackupTable', 'Backup Table', 'an optional tech label')
@enduml
```

