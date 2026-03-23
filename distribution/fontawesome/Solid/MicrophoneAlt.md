# MicrophoneAlt


```text
fontawesome/Solid/MicrophoneAlt
```

```text
include('fontawesome/Solid/MicrophoneAlt')
```



| Illustration | MicrophoneAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/MicrophoneAlt.png) | ![illustration for MicrophoneAlt](../../fontawesome/Solid/MicrophoneAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MicrophoneAltXs>`
- `<$MicrophoneAltSm>`
- `<$MicrophoneAltMd>`
- `<$MicrophoneAltLg>`





## MicrophoneAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element MicrophoneAlt
include('fontawesome/Solid/MicrophoneAlt')

' renders the element
MicrophoneAlt('MicrophoneAlt', 'Microphone Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MicrophoneAlt
include('fontawesome/Solid/MicrophoneAlt')

' renders the element
MicrophoneAlt('MicrophoneAlt', 'Microphone Alt', 'an optional tech label', 'an optional description')
@enduml
```

