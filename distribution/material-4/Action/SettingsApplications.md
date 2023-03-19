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



## Sprites
The item provides the following sriptes:

- `<$SettingsApplicationsXs>`
- `<$SettingsApplicationsSm>`
- `<$SettingsApplicationsMd>`
- `<$SettingsApplicationsLg>`





## SettingsApplications

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SettingsApplications
include('material-4/Action/SettingsApplications')

' renders the element
SettingsApplications('SettingsApplications', 'Settings Applications', 'an optional tech label', 'an optional description')
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
SettingsApplications('SettingsApplications', 'Settings Applications', 'an optional tech label', 'an optional description')
@enduml
```

