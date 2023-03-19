# VoiceOverOff


```text
material-4/Action/VoiceOverOff
```

```text
include('material-4/Action/VoiceOverOff')
```



| Illustration | VoiceOverOff |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/VoiceOverOff.png) | ![illustration for VoiceOverOff](../../material-4/Action/VoiceOverOff.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VoiceOverOffXs>`
- `<$VoiceOverOffSm>`
- `<$VoiceOverOffMd>`
- `<$VoiceOverOffLg>`





## VoiceOverOff

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element VoiceOverOff
include('material-4/Action/VoiceOverOff')

' renders the element
VoiceOverOff('VoiceOverOff', 'Voice Over Off', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element VoiceOverOff
include('material-4/Action/VoiceOverOff')

' renders the element
VoiceOverOff('VoiceOverOff', 'Voice Over Off', 'an optional tech label', 'an optional description')
@enduml
```

