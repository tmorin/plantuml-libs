# SettingsPhone


```text
material-4/Action/SettingsPhone
```

```text
include('material-4/Action/SettingsPhone')
```



| Illustration | SettingsPhone |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/SettingsPhone.png) | ![illustration for SettingsPhone](../../material-4/Action/SettingsPhone.Local.png) |




## SettingsPhone

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SettingsPhone
include('material-4/Action/SettingsPhone')

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
include('material-4/bootstrap')

' loads the Item which embeds the element SettingsPhone
include('material-4/Action/SettingsPhone')

' renders the element
SettingsPhone('SettingsPhone', 'Settings Phone', 'an optional tech label', 'an optional description')
@enduml
```

