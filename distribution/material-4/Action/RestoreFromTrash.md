# RestoreFromTrash


```text
material-4/Action/RestoreFromTrash
```

```text
include('material-4/Action/RestoreFromTrash')
```



| Illustration | RestoreFromTrash |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/RestoreFromTrash.png) | ![illustration for RestoreFromTrash](../../material-4/Action/RestoreFromTrash.Local.png) |




## RestoreFromTrash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element RestoreFromTrash
include('material-4/Action/RestoreFromTrash')

' renders the element
RestoreFromTrash('RestoreFromTrash', 'Restore From Trash', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element RestoreFromTrash
include('material-4/Action/RestoreFromTrash')

' renders the element
RestoreFromTrash('RestoreFromTrash', 'Restore From Trash', 'an optional tech label', 'an optional description')
@enduml
```

