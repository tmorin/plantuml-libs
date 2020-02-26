# MaterialsEnhancedEncryption
```text
elements/materials/Notification/MaterialsEnhancedEncryption
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsEnhancedEncryption icon](../../../icons/materials/Notification/MaterialsEnhancedEncryption.png) | ![MaterialsEnhancedEncryption element](MaterialsEnhancedEncryption.element.png) | ![MaterialsEnhancedEncryption card](MaterialsEnhancedEncryption.card.png) |
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

' loads the MaterialsEnhancedEncryption element
include('elements/materials/Notification/MaterialsEnhancedEncryption')
MaterialsEnhancedEncryption('element', 'Enhanced Encryption', 'an optional tech field')
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

' loads the MaterialsEnhancedEncryption element
include('elements/materials/Notification/MaterialsEnhancedEncryption')
MaterialsEnhancedEncryption('element', 'Enhanced Encryption', 'an optional tech field')
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

' loads the MaterialsEnhancedEncryption card
include('elements/materials/Notification/MaterialsEnhancedEncryption')
MaterialsEnhancedEncryptionCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsEnhancedEncryption card
include('elements/materials/Notification/MaterialsEnhancedEncryption')
MaterialsEnhancedEncryptionCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
