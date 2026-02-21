# RestoreFromTrash


```text
material/Action/RestoreFromTrash
```

```text
include('material/Action/RestoreFromTrash')
```



| Illustration | RestoreFromTrash |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/RestoreFromTrash.png) | ![illustration for RestoreFromTrash](../../material/Action/RestoreFromTrash.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RestoreFromTrashXs>`
- `<$RestoreFromTrashSm>`
- `<$RestoreFromTrashMd>`
- `<$RestoreFromTrashLg>`





## RestoreFromTrash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element RestoreFromTrash
include('material/Action/RestoreFromTrash')

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
include('material/bootstrap')

' loads the Item which embeds the element RestoreFromTrash
include('material/Action/RestoreFromTrash')

' renders the element
RestoreFromTrash('RestoreFromTrash', 'Restore From Trash', 'an optional tech label', 'an optional description')
@enduml
```

