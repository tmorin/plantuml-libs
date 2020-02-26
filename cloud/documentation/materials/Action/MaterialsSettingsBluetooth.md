# MaterialsSettingsBluetooth
```text
elements/materials/Action/MaterialsSettingsBluetooth
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSettingsBluetooth icon](../../../icons/materials/Action/MaterialsSettingsBluetooth.png) | ![MaterialsSettingsBluetooth element](MaterialsSettingsBluetooth.element.png) | ![MaterialsSettingsBluetooth card](MaterialsSettingsBluetooth.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/materials')

' loads the MaterialsSettingsBluetooth element
include('elements/materials/Action/MaterialsSettingsBluetooth')
MaterialsSettingsBluetooth('element', 'Settings Bluetooth', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../../"

' loads the library
!include ../../../library.puml

' loads the style
include('styles/materials')

' loads the MaterialsSettingsBluetooth element
include('elements/materials/Action/MaterialsSettingsBluetooth')
MaterialsSettingsBluetooth('element', 'Settings Bluetooth', 'an optional tech field')
@enduml
```
## Card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/materials')

' loads the MaterialsSettingsBluetooth card
include('elements/materials/Action/MaterialsSettingsBluetooth')
MaterialsSettingsBluetoothCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../../"

' loads the library
!include ../../../library.puml

' loads the style
include('styles/materials')

' loads the MaterialsSettingsBluetooth card
include('elements/materials/Action/MaterialsSettingsBluetooth')
MaterialsSettingsBluetoothCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
