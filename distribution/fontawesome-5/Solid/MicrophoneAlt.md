# MicrophoneAlt


```text
fontawesome-5/Solid/MicrophoneAlt
```

```text
include('fontawesome-5/Solid/MicrophoneAlt')
```



| Illustration | MicrophoneAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/MicrophoneAlt.png) | ![illustration for MicrophoneAlt](../../fontawesome-5/Solid/MicrophoneAlt.Local.png) |




## MicrophoneAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element MicrophoneAlt
include('fontawesome-5/Solid/MicrophoneAlt')

' renders the element
MicrophoneAlt('MicrophoneAlt', 'Microphone Alt', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element MicrophoneAlt
include('fontawesome-5/Solid/MicrophoneAlt')

' renders the element
MicrophoneAlt('MicrophoneAlt', 'Microphone Alt', 'an optional tech label')
@enduml
```

