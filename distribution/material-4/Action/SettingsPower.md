# SettingsPower


```text
material-4/Action/SettingsPower
```

```text
include('material-4/Action/SettingsPower')
```



| Illustration | SettingsPower |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/SettingsPower.png) | ![illustration for SettingsPower](../../material-4/Action/SettingsPower.Local.png) |




## SettingsPower

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SettingsPower
include('material-4/Action/SettingsPower')

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
include('material-4/bootstrap')

' loads the Item which embeds the element SettingsPower
include('material-4/Action/SettingsPower')

' renders the element
SettingsPower('SettingsPower', 'Settings Power', 'an optional tech label', 'an optional description')
@enduml
```

