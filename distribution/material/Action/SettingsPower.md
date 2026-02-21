# SettingsPower


```text
material/Action/SettingsPower
```

```text
include('material/Action/SettingsPower')
```



| Illustration | SettingsPower |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/SettingsPower.png) | ![illustration for SettingsPower](../../material/Action/SettingsPower.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SettingsPowerXs>`
- `<$SettingsPowerSm>`
- `<$SettingsPowerMd>`
- `<$SettingsPowerLg>`





## SettingsPower

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element SettingsPower
include('material/Action/SettingsPower')

' renders the element
SettingsPower('SettingsPower', 'Settings Power', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SettingsPower
include('material/Action/SettingsPower')

' renders the element
SettingsPower('SettingsPower', 'Settings Power', 'an optional tech label', 'an optional description')
@enduml
```

