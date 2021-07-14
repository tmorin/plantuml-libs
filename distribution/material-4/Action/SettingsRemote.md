# SettingsRemote


```text
material-4/Action/SettingsRemote
```

```text
include('material-4/Action/SettingsRemote')
```



| Illustration | SettingsRemote |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/SettingsRemote.png) | ![illustration for SettingsRemote](../../material-4/Action/SettingsRemote.Local.png) |




## SettingsRemote

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SettingsRemote
include('material-4/Action/SettingsRemote')

' renders the element
SettingsRemote('SettingsRemote', 'Settings Remote', 'an optional tech label')
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

' loads the Item which embeds the element SettingsRemote
include('material-4/Action/SettingsRemote')

' renders the element
SettingsRemote('SettingsRemote', 'Settings Remote', 'an optional tech label')
@enduml
```

