# BluetoothConnected


```text
material-4/Device/BluetoothConnected
```

```text
include('material-4/Device/BluetoothConnected')
```



| Illustration | BluetoothConnected |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Device/BluetoothConnected.png) | ![illustration for BluetoothConnected](../../material-4/Device/BluetoothConnected.Local.png) |




## BluetoothConnected

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element BluetoothConnected
include('material-4/Device/BluetoothConnected')

' renders the element
BluetoothConnected('BluetoothConnected', 'Bluetooth Connected', 'an optional tech label')
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

' loads the Item which embeds the element BluetoothConnected
include('material-4/Device/BluetoothConnected')

' renders the element
BluetoothConnected('BluetoothConnected', 'Bluetooth Connected', 'an optional tech label')
@enduml
```

