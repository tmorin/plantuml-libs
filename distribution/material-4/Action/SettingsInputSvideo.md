# SettingsInputSvideo


```text
material-4/Action/SettingsInputSvideo
```

```text
include('material-4/Action/SettingsInputSvideo')
```



| Illustration | SettingsInputSvideo |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/SettingsInputSvideo.png) | ![illustration for SettingsInputSvideo](../../material-4/Action/SettingsInputSvideo.Local.png) |




## SettingsInputSvideo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SettingsInputSvideo
include('material-4/Action/SettingsInputSvideo')

' renders the element
SettingsInputSvideo('SettingsInputSvideo', 'Settings Input Svideo', 'an optional tech label')
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

' loads the Item which embeds the element SettingsInputSvideo
include('material-4/Action/SettingsInputSvideo')

' renders the element
SettingsInputSvideo('SettingsInputSvideo', 'Settings Input Svideo', 'an optional tech label')
@enduml
```

