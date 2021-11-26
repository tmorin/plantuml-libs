# NoteAdd


```text
material-4/Action/NoteAdd
```

```text
include('material-4/Action/NoteAdd')
```



| Illustration | NoteAdd |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/NoteAdd.png) | ![illustration for NoteAdd](../../material-4/Action/NoteAdd.Local.png) |




## NoteAdd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element NoteAdd
include('material-4/Action/NoteAdd')

' renders the element
NoteAdd('NoteAdd', 'Note Add', 'an optional tech label')
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

' loads the Item which embeds the element NoteAdd
include('material-4/Action/NoteAdd')

' renders the element
NoteAdd('NoteAdd', 'Note Add', 'an optional tech label')
@enduml
```

