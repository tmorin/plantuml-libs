# BluetoothB


```text
fontawesome-5/Brands/BluetoothB
```

```text
include('fontawesome-5/Brands/BluetoothB')
```



| Illustration | BluetoothB |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/BluetoothB.png) | ![illustration for BluetoothB](../../fontawesome-5/Brands/BluetoothB.Local.png) |




## BluetoothB

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element BluetoothB
include('fontawesome-5/Brands/BluetoothB')

' renders the element
BluetoothB('BluetoothB', 'Bluetooth B', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element BluetoothB
include('fontawesome-5/Brands/BluetoothB')

' renders the element
BluetoothB('BluetoothB', 'Bluetooth B', 'an optional tech label')
@enduml
```

