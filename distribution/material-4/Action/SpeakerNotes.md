# SpeakerNotes


```text
material-4/Action/SpeakerNotes
```

```text
include('material-4/Action/SpeakerNotes')
```



| Illustration | SpeakerNotes |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/SpeakerNotes.png) | ![illustration for SpeakerNotes](../../material-4/Action/SpeakerNotes.Local.png) |




## SpeakerNotes

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SpeakerNotes
include('material-4/Action/SpeakerNotes')

' renders the element
SpeakerNotes('SpeakerNotes', 'Speaker Notes', 'an optional tech label')
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

' loads the Item which embeds the element SpeakerNotes
include('material-4/Action/SpeakerNotes')

' renders the element
SpeakerNotes('SpeakerNotes', 'Speaker Notes', 'an optional tech label')
@enduml
```

