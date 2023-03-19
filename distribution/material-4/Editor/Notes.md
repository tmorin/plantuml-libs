# Notes


```text
material-4/Editor/Notes
```

```text
include('material-4/Editor/Notes')
```



| Illustration | Notes |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Editor/Notes.png) | ![illustration for Notes](../../material-4/Editor/Notes.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NotesXs>`
- `<$NotesSm>`
- `<$NotesMd>`
- `<$NotesLg>`





## Notes

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Notes
include('material-4/Editor/Notes')

' renders the element
Notes('Notes', 'Notes', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Notes
include('material-4/Editor/Notes')

' renders the element
Notes('Notes', 'Notes', 'an optional tech label', 'an optional description')
@enduml
```

