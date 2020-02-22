# MaterialsBluetoothSearching
```text
elements/materials/Device/MaterialsBluetoothSearching
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsBluetoothSearching icon](../../../icons/materials/Device/MaterialsBluetoothSearching.png) | ![MaterialsBluetoothSearching element](MaterialsBluetoothSearching.element.png) | ![MaterialsBluetoothSearching card](MaterialsBluetoothSearching.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the AWS style
include('styles/aws')

' loads the MaterialsBluetoothSearching element
include('elements/materials/Device/MaterialsBluetoothSearching')
MaterialsBluetoothSearching('element', 'Bluetooth Searching', 'an optional tech field')
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

' loads the AWS style
include('styles/aws')

' loads the MaterialsBluetoothSearching element
include('elements/materials/Device/MaterialsBluetoothSearching')
MaterialsBluetoothSearching('element', 'Bluetooth Searching', 'an optional tech field')
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

' loads the AWS style
include('styles/gcp')

' loads the MaterialsBluetoothSearching card
include('elements/materials/Device/MaterialsBluetoothSearching')
MaterialsBluetoothSearchingCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GCP style
include('styles/gcp')

' loads the MaterialsBluetoothSearching card
include('elements/materials/Device/MaterialsBluetoothSearching')
MaterialsBluetoothSearchingCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
