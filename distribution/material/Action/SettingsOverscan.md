# SettingsOverscan


```text
material/Action/SettingsOverscan
```

```text
include('material/Action/SettingsOverscan')
```



| Illustration | SettingsOverscan |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/SettingsOverscan.png) | ![illustration for SettingsOverscan](../../material/Action/SettingsOverscan.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SettingsOverscanXs>`
- `<$SettingsOverscanSm>`
- `<$SettingsOverscanMd>`
- `<$SettingsOverscanLg>`





## SettingsOverscan

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element SettingsOverscan
include('material/Action/SettingsOverscan')

' renders the element
SettingsOverscan('SettingsOverscan', 'Settings Overscan', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SettingsOverscan
include('material/Action/SettingsOverscan')

' renders the element
SettingsOverscan('SettingsOverscan', 'Settings Overscan', 'an optional tech label', 'an optional description')
@enduml
```

