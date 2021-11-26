# SettingsVoice


```text
material-4/Action/SettingsVoice
```

```text
include('material-4/Action/SettingsVoice')
```



| Illustration | SettingsVoice |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/SettingsVoice.png) | ![illustration for SettingsVoice](../../material-4/Action/SettingsVoice.Local.png) |




## SettingsVoice

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SettingsVoice
include('material-4/Action/SettingsVoice')

' renders the element
SettingsVoice('SettingsVoice', 'Settings Voice', 'an optional tech label')
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

' loads the Item which embeds the element SettingsVoice
include('material-4/Action/SettingsVoice')

' renders the element
SettingsVoice('SettingsVoice', 'Settings Voice', 'an optional tech label')
@enduml
```

