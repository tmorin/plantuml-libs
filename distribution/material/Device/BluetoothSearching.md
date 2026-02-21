# BluetoothSearching


```text
material/Device/BluetoothSearching
```

```text
include('material/Device/BluetoothSearching')
```



| Illustration | BluetoothSearching |
| :---: | :---: |
| ![illustration for Illustration](../../material/Device/BluetoothSearching.png) | ![illustration for BluetoothSearching](../../material/Device/BluetoothSearching.Local.png) |



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
include('material/bootstrap')

' loads the Item which embeds the element BluetoothSearching
include('material/Device/BluetoothSearching')

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
include('material/bootstrap')

' loads the Item which embeds the element BluetoothSearching
include('material/Device/BluetoothSearching')

' renders the element
BluetoothSearching('BluetoothSearching', 'Bluetooth Searching', 'an optional tech label', 'an optional description')
@enduml
```

