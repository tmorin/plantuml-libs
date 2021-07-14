# SettingsApplications


```text
material-4/Action/SettingsApplications
```

```text
include('material-4/Action/SettingsApplications')
```



| Illustration | SettingsApplications |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/SettingsApplications.png) | ![illustration for SettingsApplications](../../material-4/Action/SettingsApplications.Local.png) |




## SettingsApplications

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SettingsApplications
include('material-4/Action/SettingsApplications')

' renders the element
SettingsApplications('SettingsApplications', 'Settings Applications', 'an optional tech label')
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

' loads the Item which embeds the element SettingsApplications
include('material-4/Action/SettingsApplications')

' renders the element
SettingsApplications('SettingsApplications', 'Settings Applications', 'an optional tech label')
@enduml
```

