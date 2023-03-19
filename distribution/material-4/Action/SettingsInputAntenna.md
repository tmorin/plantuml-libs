# SettingsInputAntenna


```text
material-4/Action/SettingsInputAntenna
```

```text
include('material-4/Action/SettingsInputAntenna')
```



| Illustration | SettingsInputAntenna |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/SettingsInputAntenna.png) | ![illustration for SettingsInputAntenna](../../material-4/Action/SettingsInputAntenna.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SettingsInputAntennaXs>`
- `<$SettingsInputAntennaSm>`
- `<$SettingsInputAntennaMd>`
- `<$SettingsInputAntennaLg>`





## SettingsInputAntenna

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SettingsInputAntenna
include('material-4/Action/SettingsInputAntenna')

' renders the element
SettingsInputAntenna('SettingsInputAntenna', 'Settings Input Antenna', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SettingsInputAntenna
include('material-4/Action/SettingsInputAntenna')

' renders the element
SettingsInputAntenna('SettingsInputAntenna', 'Settings Input Antenna', 'an optional tech label', 'an optional description')
@enduml
```

