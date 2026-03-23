# StickyNote


```text
fontawesome/Regular/StickyNote
```

```text
include('fontawesome/Regular/StickyNote')
```



| Illustration | StickyNote |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/StickyNote.png) | ![illustration for StickyNote](../../fontawesome/Regular/StickyNote.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StickyNoteXs>`
- `<$StickyNoteSm>`
- `<$StickyNoteMd>`
- `<$StickyNoteLg>`





## StickyNote

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element StickyNote
include('fontawesome/Regular/StickyNote')

' renders the element
StickyNote('StickyNote', 'Sticky Note', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element StickyNote
include('fontawesome/Regular/StickyNote')

' renders the element
StickyNote('StickyNote', 'Sticky Note', 'an optional tech label', 'an optional description')
@enduml
```

