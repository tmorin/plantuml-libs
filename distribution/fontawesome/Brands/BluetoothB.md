# BluetoothB


```text
fontawesome/Brands/BluetoothB
```

```text
include('fontawesome/Brands/BluetoothB')
```



| Illustration | BluetoothB |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/BluetoothB.png) | ![illustration for BluetoothB](../../fontawesome/Brands/BluetoothB.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BluetoothBXs>`
- `<$BluetoothBSm>`
- `<$BluetoothBMd>`
- `<$BluetoothBLg>`





## BluetoothB

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element BluetoothB
include('fontawesome/Brands/BluetoothB')

' renders the element
BluetoothB('BluetoothB', 'Bluetooth B', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element BluetoothB
include('fontawesome/Brands/BluetoothB')

' renders the element
BluetoothB('BluetoothB', 'Bluetooth B', 'an optional tech label', 'an optional description')
@enduml
```

