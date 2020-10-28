# MaterialsScreenRotation
```text
elements/materials/Device/MaterialsScreenRotation
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsScreenRotation icon](../../../icons/materials/Device/MaterialsScreenRotation.png) | ![MaterialsScreenRotation element](MaterialsScreenRotation.element.png) | ![MaterialsScreenRotation card](MaterialsScreenRotation.card.png) |
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

' loads the MaterialsScreenRotation element
include('elements/materials/Device/MaterialsScreenRotation')
MaterialsScreenRotation('element', 'Screen Rotation', 'an optional tech field')
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

' loads the MaterialsScreenRotation element
include('elements/materials/Device/MaterialsScreenRotation')
MaterialsScreenRotation('element', 'Screen Rotation', 'an optional tech field')
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

' loads the MaterialsScreenRotation card
include('elements/materials/Device/MaterialsScreenRotation')
MaterialsScreenRotationCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsScreenRotation card
include('elements/materials/Device/MaterialsScreenRotation')
MaterialsScreenRotationCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
