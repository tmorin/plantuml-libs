# Settings Voice

```text
material-4.0/Action/SettingsVoice
```

```text
include('material-4.0/Action/SettingsVoice')
```

|icon|element|
|---|---|
|![](SettingsVoice.png)|![](SettingsVoice.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the material-4.0 bootstrap
include('material-4.0/bootstrap')
' loads the SettingsVoice element
include('material-4.0/Action/SettingsVoice')
SettingsVoice('settings_voice', 'Settings Voice', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the material-4.0 bootstrap
include('material-4.0/bootstrap')
' loads the SettingsVoice element
include('material-4.0/Action/SettingsVoice')
SettingsVoice('settings_voice', 'Settings Voice', 'an optional tech field')
@enduml
```

