# MicrophoneLines


```text
fontawesome/Solid/MicrophoneLines
```

```text
include('fontawesome/Solid/MicrophoneLines')
```



| Illustration | MicrophoneLines |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/MicrophoneLines.png) | ![illustration for MicrophoneLines](../../fontawesome/Solid/MicrophoneLines.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MicrophoneLinesXs>`
- `<$MicrophoneLinesSm>`
- `<$MicrophoneLinesMd>`
- `<$MicrophoneLinesLg>`





## MicrophoneLines

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element MicrophoneLines
include('fontawesome/Solid/MicrophoneLines')

' renders the element
MicrophoneLines('MicrophoneLines', 'Microphone Lines', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MicrophoneLines
include('fontawesome/Solid/MicrophoneLines')

' renders the element
MicrophoneLines('MicrophoneLines', 'Microphone Lines', 'an optional tech label', 'an optional description')
@enduml
```

