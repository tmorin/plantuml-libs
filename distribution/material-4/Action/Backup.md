# Backup


```text
material-4/Action/Backup
```

```text
include('material-4/Action/Backup')
```



| Illustration | Backup |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Backup.png) | ![illustration for Backup](../../material-4/Action/Backup.Local.png) |




## Backup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Backup
include('material-4/Action/Backup')

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
include('material-4/bootstrap')

' loads the Item which embeds the element Backup
include('material-4/Action/Backup')

' renders the element
Backup('Backup', 'Backup', 'an optional tech label', 'an optional description')
@enduml
```

