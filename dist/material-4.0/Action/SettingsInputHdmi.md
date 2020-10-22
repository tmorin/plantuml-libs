# Settings Input Hdmi

```text
material-4.0/Action/SettingsInputHdmi
```

```text
include('material-4.0/Action/SettingsInputHdmi')
```

|icon|element|
|---|---|
|![](SettingsInputHdmi.png)|![](SettingsInputHdmi.element.png)|



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
' loads the SettingsInputHdmi element
include('material-4.0/Action/SettingsInputHdmi')
SettingsInputHdmi('settings_input_hdmi', 'Settings Input Hdmi', 'an optional tech field')
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
' loads the SettingsInputHdmi element
include('material-4.0/Action/SettingsInputHdmi')
SettingsInputHdmi('settings_input_hdmi', 'Settings Input Hdmi', 'an optional tech field')
@enduml
```

