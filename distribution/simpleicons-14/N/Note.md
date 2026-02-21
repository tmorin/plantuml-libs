# Note


```text
simpleicons-14/N/Note
```

```text
include('simpleicons-14/N/Note')
```



| Illustration | Note |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/N/Note.png) | ![illustration for Note](../../simpleicons-14/N/Note.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Note
include('simpleicons-14/N/Note')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Note
include('simpleicons-14/N/Note')

' renders the element
Note('Note', 'Note', 'an optional tech label', 'an optional description')
@enduml
```

