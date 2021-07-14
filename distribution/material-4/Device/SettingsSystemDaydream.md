# SettingsSystemDaydream


```text
material-4/Device/SettingsSystemDaydream
```

```text
include('material-4/Device/SettingsSystemDaydream')
```



| Illustration | SettingsSystemDaydream |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Device/SettingsSystemDaydream.png) | ![illustration for SettingsSystemDaydream](../../material-4/Device/SettingsSystemDaydream.Local.png) |




## SettingsSystemDaydream

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SettingsSystemDaydream
include('material-4/Device/SettingsSystemDaydream')

' renders the element
SettingsSystemDaydream('SettingsSystemDaydream', 'Settings System Daydream', 'an optional tech label')
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

' loads the Item which embeds the element SettingsSystemDaydream
include('material-4/Device/SettingsSystemDaydream')

' renders the element
SettingsSystemDaydream('SettingsSystemDaydream', 'Settings System Daydream', 'an optional tech label')
@enduml
```

