# SettingsEthernet


```text
material-4/Action/SettingsEthernet
```

```text
include('material-4/Action/SettingsEthernet')
```



| Illustration | SettingsEthernet |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/SettingsEthernet.png) | ![illustration for SettingsEthernet](../../material-4/Action/SettingsEthernet.Local.png) |




## SettingsEthernet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SettingsEthernet
include('material-4/Action/SettingsEthernet')

' renders the element
SettingsEthernet('SettingsEthernet', 'Settings Ethernet', 'an optional tech label')
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

' loads the Item which embeds the element SettingsEthernet
include('material-4/Action/SettingsEthernet')

' renders the element
SettingsEthernet('SettingsEthernet', 'Settings Ethernet', 'an optional tech label')
@enduml
```

