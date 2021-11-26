# PhoneBluetoothSpeaker


```text
material-4/Notification/PhoneBluetoothSpeaker
```

```text
include('material-4/Notification/PhoneBluetoothSpeaker')
```



| Illustration | PhoneBluetoothSpeaker |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Notification/PhoneBluetoothSpeaker.png) | ![illustration for PhoneBluetoothSpeaker](../../material-4/Notification/PhoneBluetoothSpeaker.Local.png) |




## PhoneBluetoothSpeaker

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element PhoneBluetoothSpeaker
include('material-4/Notification/PhoneBluetoothSpeaker')

' renders the element
PhoneBluetoothSpeaker('PhoneBluetoothSpeaker', 'Phone Bluetooth Speaker', 'an optional tech label')
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

' loads the Item which embeds the element PhoneBluetoothSpeaker
include('material-4/Notification/PhoneBluetoothSpeaker')

' renders the element
PhoneBluetoothSpeaker('PhoneBluetoothSpeaker', 'Phone Bluetooth Speaker', 'an optional tech label')
@enduml
```

