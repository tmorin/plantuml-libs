# PhoneBluetoothSpeaker


```text
material/Notification/PhoneBluetoothSpeaker
```

```text
include('material/Notification/PhoneBluetoothSpeaker')
```



| Illustration | PhoneBluetoothSpeaker |
| :---: | :---: |
| ![illustration for Illustration](../../material/Notification/PhoneBluetoothSpeaker.png) | ![illustration for PhoneBluetoothSpeaker](../../material/Notification/PhoneBluetoothSpeaker.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PhoneBluetoothSpeakerXs>`
- `<$PhoneBluetoothSpeakerSm>`
- `<$PhoneBluetoothSpeakerMd>`
- `<$PhoneBluetoothSpeakerLg>`





## PhoneBluetoothSpeaker

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element PhoneBluetoothSpeaker
include('material/Notification/PhoneBluetoothSpeaker')

' renders the element
PhoneBluetoothSpeaker('PhoneBluetoothSpeaker', 'Phone Bluetooth Speaker', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PhoneBluetoothSpeaker
include('material/Notification/PhoneBluetoothSpeaker')

' renders the element
PhoneBluetoothSpeaker('PhoneBluetoothSpeaker', 'Phone Bluetooth Speaker', 'an optional tech label', 'an optional description')
@enduml
```

