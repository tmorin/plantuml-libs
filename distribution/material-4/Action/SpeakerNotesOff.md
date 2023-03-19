# SpeakerNotesOff


```text
material-4/Action/SpeakerNotesOff
```

```text
include('material-4/Action/SpeakerNotesOff')
```



| Illustration | SpeakerNotesOff |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/SpeakerNotesOff.png) | ![illustration for SpeakerNotesOff](../../material-4/Action/SpeakerNotesOff.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SpeakerNotesOffXs>`
- `<$SpeakerNotesOffSm>`
- `<$SpeakerNotesOffMd>`
- `<$SpeakerNotesOffLg>`





## SpeakerNotesOff

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SpeakerNotesOff
include('material-4/Action/SpeakerNotesOff')

' renders the element
SpeakerNotesOff('SpeakerNotesOff', 'Speaker Notes Off', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SpeakerNotesOff
include('material-4/Action/SpeakerNotesOff')

' renders the element
SpeakerNotesOff('SpeakerNotesOff', 'Speaker Notes Off', 'an optional tech label', 'an optional description')
@enduml
```

