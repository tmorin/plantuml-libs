# BluetoothAudio


```text
material/Notification/BluetoothAudio
```

```text
include('material/Notification/BluetoothAudio')
```



| Illustration | BluetoothAudio |
| :---: | :---: |
| ![illustration for Illustration](../../material/Notification/BluetoothAudio.png) | ![illustration for BluetoothAudio](../../material/Notification/BluetoothAudio.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BluetoothAudioXs>`
- `<$BluetoothAudioSm>`
- `<$BluetoothAudioMd>`
- `<$BluetoothAudioLg>`





## BluetoothAudio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element BluetoothAudio
include('material/Notification/BluetoothAudio')

' renders the element
BluetoothAudio('BluetoothAudio', 'Bluetooth Audio', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BluetoothAudio
include('material/Notification/BluetoothAudio')

' renders the element
BluetoothAudio('BluetoothAudio', 'Bluetooth Audio', 'an optional tech label', 'an optional description')
@enduml
```

