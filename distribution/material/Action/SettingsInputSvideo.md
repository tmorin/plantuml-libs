# SettingsInputSvideo


```text
material/Action/SettingsInputSvideo
```

```text
include('material/Action/SettingsInputSvideo')
```



| Illustration | SettingsInputSvideo |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/SettingsInputSvideo.png) | ![illustration for SettingsInputSvideo](../../material/Action/SettingsInputSvideo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SettingsInputSvideoXs>`
- `<$SettingsInputSvideoSm>`
- `<$SettingsInputSvideoMd>`
- `<$SettingsInputSvideoLg>`





## SettingsInputSvideo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element SettingsInputSvideo
include('material/Action/SettingsInputSvideo')

' renders the element
SettingsInputSvideo('SettingsInputSvideo', 'Settings Input Svideo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SettingsInputSvideo
include('material/Action/SettingsInputSvideo')

' renders the element
SettingsInputSvideo('SettingsInputSvideo', 'Settings Input Svideo', 'an optional tech label', 'an optional description')
@enduml
```

