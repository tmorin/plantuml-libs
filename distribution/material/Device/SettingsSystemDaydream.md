# SettingsSystemDaydream


```text
material/Device/SettingsSystemDaydream
```

```text
include('material/Device/SettingsSystemDaydream')
```



| Illustration | SettingsSystemDaydream |
| :---: | :---: |
| ![illustration for Illustration](../../material/Device/SettingsSystemDaydream.png) | ![illustration for SettingsSystemDaydream](../../material/Device/SettingsSystemDaydream.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SettingsSystemDaydreamXs>`
- `<$SettingsSystemDaydreamSm>`
- `<$SettingsSystemDaydreamMd>`
- `<$SettingsSystemDaydreamLg>`





## SettingsSystemDaydream

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element SettingsSystemDaydream
include('material/Device/SettingsSystemDaydream')

' renders the element
SettingsSystemDaydream('SettingsSystemDaydream', 'Settings System Daydream', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SettingsSystemDaydream
include('material/Device/SettingsSystemDaydream')

' renders the element
SettingsSystemDaydream('SettingsSystemDaydream', 'Settings System Daydream', 'an optional tech label', 'an optional description')
@enduml
```

