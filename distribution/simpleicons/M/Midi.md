# Midi


```text
simpleicons/M/Midi
```

```text
include('simpleicons/M/Midi')
```



| Illustration | Midi |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Midi.png) | ![illustration for Midi](../../simpleicons/M/Midi.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MidiXs>`
- `<$MidiSm>`
- `<$MidiMd>`
- `<$MidiLg>`





## Midi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Midi
include('simpleicons/M/Midi')

' renders the element
Midi('Midi', 'Midi', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Midi
include('simpleicons/M/Midi')

' renders the element
Midi('Midi', 'Midi', 'an optional tech label', 'an optional description')
@enduml
```

