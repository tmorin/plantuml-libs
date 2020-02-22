# MaterialsPhoneBluetoothSpeaker
```text
elements/materials/Notification/MaterialsPhoneBluetoothSpeaker
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsPhoneBluetoothSpeaker icon](../../../icons/materials/Notification/MaterialsPhoneBluetoothSpeaker.png) | ![MaterialsPhoneBluetoothSpeaker element](MaterialsPhoneBluetoothSpeaker.element.png) | ![MaterialsPhoneBluetoothSpeaker card](MaterialsPhoneBluetoothSpeaker.card.png) |
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

' loads the MaterialsPhoneBluetoothSpeaker element
include('elements/materials/Notification/MaterialsPhoneBluetoothSpeaker')
MaterialsPhoneBluetoothSpeaker('element', 'Phone Bluetooth Speaker', 'an optional tech field')
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

' loads the MaterialsPhoneBluetoothSpeaker element
include('elements/materials/Notification/MaterialsPhoneBluetoothSpeaker')
MaterialsPhoneBluetoothSpeaker('element', 'Phone Bluetooth Speaker', 'an optional tech field')
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

' loads the MaterialsPhoneBluetoothSpeaker card
include('elements/materials/Notification/MaterialsPhoneBluetoothSpeaker')
MaterialsPhoneBluetoothSpeakerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsPhoneBluetoothSpeaker card
include('elements/materials/Notification/MaterialsPhoneBluetoothSpeaker')
MaterialsPhoneBluetoothSpeakerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
