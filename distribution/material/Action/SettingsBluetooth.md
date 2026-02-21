# SettingsBluetooth


```text
material/Action/SettingsBluetooth
```

```text
include('material/Action/SettingsBluetooth')
```



| Illustration | SettingsBluetooth |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/SettingsBluetooth.png) | ![illustration for SettingsBluetooth](../../material/Action/SettingsBluetooth.Local.png) |



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
include('material/bootstrap')

' loads the Item which embeds the element SettingsBluetooth
include('material/Action/SettingsBluetooth')

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
include('material/bootstrap')

' loads the Item which embeds the element SettingsBluetooth
include('material/Action/SettingsBluetooth')

' renders the element
SettingsBluetooth('SettingsBluetooth', 'Settings Bluetooth', 'an optional tech label', 'an optional description')
@enduml
```

