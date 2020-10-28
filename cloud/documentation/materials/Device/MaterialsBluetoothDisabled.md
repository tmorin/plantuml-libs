# MaterialsBluetoothDisabled
```text
elements/materials/Device/MaterialsBluetoothDisabled
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsBluetoothDisabled icon](../../../icons/materials/Device/MaterialsBluetoothDisabled.png) | ![MaterialsBluetoothDisabled element](MaterialsBluetoothDisabled.element.png) | ![MaterialsBluetoothDisabled card](MaterialsBluetoothDisabled.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="v1.x"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/materials')

' loads the MaterialsBluetoothDisabled element
include('elements/materials/Device/MaterialsBluetoothDisabled')
MaterialsBluetoothDisabled('element', 'Bluetooth Disabled', 'an optional tech field')
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

' loads the MaterialsBluetoothDisabled element
include('elements/materials/Device/MaterialsBluetoothDisabled')
MaterialsBluetoothDisabled('element', 'Bluetooth Disabled', 'an optional tech field')
@enduml
```
## Card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="v1.x"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/materials')

' loads the MaterialsBluetoothDisabled card
include('elements/materials/Device/MaterialsBluetoothDisabled')
MaterialsBluetoothDisabledCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsBluetoothDisabled card
include('elements/materials/Device/MaterialsBluetoothDisabled')
MaterialsBluetoothDisabledCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
