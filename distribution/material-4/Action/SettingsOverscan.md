# SettingsOverscan


```text
material-4/Action/SettingsOverscan
```

```text
include('material-4/Action/SettingsOverscan')
```



| Illustration | SettingsOverscan |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/SettingsOverscan.png) | ![illustration for SettingsOverscan](../../material-4/Action/SettingsOverscan.Local.png) |




## SettingsOverscan

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SettingsOverscan
include('material-4/Action/SettingsOverscan')

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
include('material-4/bootstrap')

' loads the Item which embeds the element SettingsOverscan
include('material-4/Action/SettingsOverscan')

' renders the element
SettingsOverscan('SettingsOverscan', 'Settings Overscan', 'an optional tech label', 'an optional description')
@enduml
```

