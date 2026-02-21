# PermDataSetting


```text
material/Action/PermDataSetting
```

```text
include('material/Action/PermDataSetting')
```



| Illustration | PermDataSetting |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/PermDataSetting.png) | ![illustration for PermDataSetting](../../material/Action/PermDataSetting.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PermDataSettingXs>`
- `<$PermDataSettingSm>`
- `<$PermDataSettingMd>`
- `<$PermDataSettingLg>`





## PermDataSetting

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element PermDataSetting
include('material/Action/PermDataSetting')

' renders the element
PermDataSetting('PermDataSetting', 'Perm Data Setting', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PermDataSetting
include('material/Action/PermDataSetting')

' renders the element
PermDataSetting('PermDataSetting', 'Perm Data Setting', 'an optional tech label', 'an optional description')
@enduml
```

