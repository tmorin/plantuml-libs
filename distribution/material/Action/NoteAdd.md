# NoteAdd


```text
material/Action/NoteAdd
```

```text
include('material/Action/NoteAdd')
```



| Illustration | NoteAdd |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/NoteAdd.png) | ![illustration for NoteAdd](../../material/Action/NoteAdd.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NoteAddXs>`
- `<$NoteAddSm>`
- `<$NoteAddMd>`
- `<$NoteAddLg>`





## NoteAdd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element NoteAdd
include('material/Action/NoteAdd')

' renders the element
NoteAdd('NoteAdd', 'Note Add', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element NoteAdd
include('material/Action/NoteAdd')

' renders the element
NoteAdd('NoteAdd', 'Note Add', 'an optional tech label', 'an optional description')
@enduml
```

