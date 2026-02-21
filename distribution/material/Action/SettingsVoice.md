# SettingsVoice


```text
material/Action/SettingsVoice
```

```text
include('material/Action/SettingsVoice')
```



| Illustration | SettingsVoice |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/SettingsVoice.png) | ![illustration for SettingsVoice](../../material/Action/SettingsVoice.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SettingsVoiceXs>`
- `<$SettingsVoiceSm>`
- `<$SettingsVoiceMd>`
- `<$SettingsVoiceLg>`





## SettingsVoice

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element SettingsVoice
include('material/Action/SettingsVoice')

' renders the element
SettingsVoice('SettingsVoice', 'Settings Voice', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SettingsVoice
include('material/Action/SettingsVoice')

' renders the element
SettingsVoice('SettingsVoice', 'Settings Voice', 'an optional tech label', 'an optional description')
@enduml
```

