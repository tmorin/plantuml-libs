# SettingsBluetooth


```text
material-4/Action/SettingsBluetooth
```

```text
include('material-4/Action/SettingsBluetooth')
```



| Illustration | SettingsBluetooth |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/SettingsBluetooth.png) | ![illustration for SettingsBluetooth](../../material-4/Action/SettingsBluetooth.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SettingsBluetoothXs>`
- `<$SettingsBluetoothSm>`
- `<$SettingsBluetoothMd>`
- `<$SettingsBluetoothLg>`





## SettingsBluetooth

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SettingsBluetooth
include('material-4/Action/SettingsBluetooth')

' renders the element
SettingsBluetooth('SettingsBluetooth', 'Settings Bluetooth', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SettingsBluetooth
include('material-4/Action/SettingsBluetooth')

' renders the element
SettingsBluetooth('SettingsBluetooth', 'Settings Bluetooth', 'an optional tech label', 'an optional description')
@enduml
```

