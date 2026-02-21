# SettingsPhone


```text
material/Action/SettingsPhone
```

```text
include('material/Action/SettingsPhone')
```



| Illustration | SettingsPhone |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/SettingsPhone.png) | ![illustration for SettingsPhone](../../material/Action/SettingsPhone.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SettingsPhoneXs>`
- `<$SettingsPhoneSm>`
- `<$SettingsPhoneMd>`
- `<$SettingsPhoneLg>`





## SettingsPhone

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element SettingsPhone
include('material/Action/SettingsPhone')

' renders the element
SettingsPhone('SettingsPhone', 'Settings Phone', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SettingsPhone
include('material/Action/SettingsPhone')

' renders the element
SettingsPhone('SettingsPhone', 'Settings Phone', 'an optional tech label', 'an optional description')
@enduml
```

