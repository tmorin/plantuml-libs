# MaterialsNoEncryption
```text
elements/materials/Notification/MaterialsNoEncryption
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsNoEncryption icon](../../../icons/materials/Notification/MaterialsNoEncryption.png) | ![MaterialsNoEncryption element](MaterialsNoEncryption.element.png) | ![MaterialsNoEncryption card](MaterialsNoEncryption.card.png) |
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

' loads the MaterialsNoEncryption element
include('elements/materials/Notification/MaterialsNoEncryption')
MaterialsNoEncryption('element', 'No Encryption', 'an optional tech field')
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

' loads the MaterialsNoEncryption element
include('elements/materials/Notification/MaterialsNoEncryption')
MaterialsNoEncryption('element', 'No Encryption', 'an optional tech field')
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

' loads the MaterialsNoEncryption card
include('elements/materials/Notification/MaterialsNoEncryption')
MaterialsNoEncryptionCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsNoEncryption card
include('elements/materials/Notification/MaterialsNoEncryption')
MaterialsNoEncryptionCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
