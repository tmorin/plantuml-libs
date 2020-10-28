# MaterialsScreenLockRotation
```text
elements/materials/Device/MaterialsScreenLockRotation
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsScreenLockRotation icon](../../../icons/materials/Device/MaterialsScreenLockRotation.png) | ![MaterialsScreenLockRotation element](MaterialsScreenLockRotation.element.png) | ![MaterialsScreenLockRotation card](MaterialsScreenLockRotation.card.png) |
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

' loads the MaterialsScreenLockRotation element
include('elements/materials/Device/MaterialsScreenLockRotation')
MaterialsScreenLockRotation('element', 'Screen Lock Rotation', 'an optional tech field')
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

' loads the MaterialsScreenLockRotation element
include('elements/materials/Device/MaterialsScreenLockRotation')
MaterialsScreenLockRotation('element', 'Screen Lock Rotation', 'an optional tech field')
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

' loads the MaterialsScreenLockRotation card
include('elements/materials/Device/MaterialsScreenLockRotation')
MaterialsScreenLockRotationCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsScreenLockRotation card
include('elements/materials/Device/MaterialsScreenLockRotation')
MaterialsScreenLockRotationCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
