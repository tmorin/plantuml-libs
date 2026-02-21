# SpeakerNotes


```text
material/Action/SpeakerNotes
```

```text
include('material/Action/SpeakerNotes')
```



| Illustration | SpeakerNotes |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/SpeakerNotes.png) | ![illustration for SpeakerNotes](../../material/Action/SpeakerNotes.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SpeakerNotesXs>`
- `<$SpeakerNotesSm>`
- `<$SpeakerNotesMd>`
- `<$SpeakerNotesLg>`





## SpeakerNotes

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element SpeakerNotes
include('material/Action/SpeakerNotes')

' renders the element
SpeakerNotes('SpeakerNotes', 'Speaker Notes', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SpeakerNotes
include('material/Action/SpeakerNotes')

' renders the element
SpeakerNotes('SpeakerNotes', 'Speaker Notes', 'an optional tech label', 'an optional description')
@enduml
```

