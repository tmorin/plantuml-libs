# Note


```text
material/Av/Note
```

```text
include('material/Av/Note')
```



| Illustration | Note |
| :---: | :---: |
| ![illustration for Illustration](../../material/Av/Note.png) | ![illustration for Note](../../material/Av/Note.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NoteXs>`
- `<$NoteSm>`
- `<$NoteMd>`
- `<$NoteLg>`





## Note

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Note
include('material/Av/Note')

' renders the element
Note('Note', 'Note', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Note
include('material/Av/Note')

' renders the element
Note('Note', 'Note', 'an optional tech label', 'an optional description')
@enduml
```

