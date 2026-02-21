# Bluetooth


```text
simpleicons/B/Bluetooth
```

```text
include('simpleicons/B/Bluetooth')
```



| Illustration | Bluetooth |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/B/Bluetooth.png) | ![illustration for Bluetooth](../../simpleicons/B/Bluetooth.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BluetoothXs>`
- `<$BluetoothSm>`
- `<$BluetoothMd>`
- `<$BluetoothLg>`





## Bluetooth

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Bluetooth
include('simpleicons/B/Bluetooth')

' renders the element
Bluetooth('Bluetooth', 'Bluetooth', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Bluetooth
include('simpleicons/B/Bluetooth')

' renders the element
Bluetooth('Bluetooth', 'Bluetooth', 'an optional tech label', 'an optional description')
@enduml
```

