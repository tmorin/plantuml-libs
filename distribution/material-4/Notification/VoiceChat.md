# VoiceChat


```text
material-4/Notification/VoiceChat
```

```text
include('material-4/Notification/VoiceChat')
```



| Illustration | VoiceChat |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Notification/VoiceChat.png) | ![illustration for VoiceChat](../../material-4/Notification/VoiceChat.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VoiceChatXs>`
- `<$VoiceChatSm>`
- `<$VoiceChatMd>`
- `<$VoiceChatLg>`





## VoiceChat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element VoiceChat
include('material-4/Notification/VoiceChat')

' renders the element
VoiceChat('VoiceChat', 'Voice Chat', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element VoiceChat
include('material-4/Notification/VoiceChat')

' renders the element
VoiceChat('VoiceChat', 'Voice Chat', 'an optional tech label', 'an optional description')
@enduml
```

