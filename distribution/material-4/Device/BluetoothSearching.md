# BluetoothSearching


```text
material-4/Device/BluetoothSearching
```

```text
include('material-4/Device/BluetoothSearching')
```



| Illustration | BluetoothSearching |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Device/BluetoothSearching.png) | ![illustration for BluetoothSearching](../../material-4/Device/BluetoothSearching.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BluetoothSearchingXs>`
- `<$BluetoothSearchingSm>`
- `<$BluetoothSearchingMd>`
- `<$BluetoothSearchingLg>`





## BluetoothSearching

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element BluetoothSearching
include('material-4/Device/BluetoothSearching')

' renders the element
BluetoothSearching('BluetoothSearching', 'Bluetooth Searching', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BluetoothSearching
include('material-4/Device/BluetoothSearching')

' renders the element
BluetoothSearching('BluetoothSearching', 'Bluetooth Searching', 'an optional tech label', 'an optional description')
@enduml
```

