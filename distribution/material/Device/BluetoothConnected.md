# BluetoothConnected


```text
material/Device/BluetoothConnected
```

```text
include('material/Device/BluetoothConnected')
```



| Illustration | BluetoothConnected |
| :---: | :---: |
| ![illustration for Illustration](../../material/Device/BluetoothConnected.png) | ![illustration for BluetoothConnected](../../material/Device/BluetoothConnected.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BluetoothConnectedXs>`
- `<$BluetoothConnectedSm>`
- `<$BluetoothConnectedMd>`
- `<$BluetoothConnectedLg>`





## BluetoothConnected

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element BluetoothConnected
include('material/Device/BluetoothConnected')

' renders the element
BluetoothConnected('BluetoothConnected', 'Bluetooth Connected', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BluetoothConnected
include('material/Device/BluetoothConnected')

' renders the element
BluetoothConnected('BluetoothConnected', 'Bluetooth Connected', 'an optional tech label', 'an optional description')
@enduml
```

