# Materials3dRotation
```text
elements/materials/Action/Materials3dRotation
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![Materials3dRotation icon](../../../icons/materials/Action/Materials3dRotation.png) | ![Materials3dRotation element](Materials3dRotation.element.png) | ![Materials3dRotation card](Materials3dRotation.card.png) |
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

' loads the Materials3dRotation element
include('elements/materials/Action/Materials3dRotation')
Materials3dRotation('element', 'Rotation', 'an optional tech field')
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

' loads the Materials3dRotation element
include('elements/materials/Action/Materials3dRotation')
Materials3dRotation('element', 'Rotation', 'an optional tech field')
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

' loads the Materials3dRotation card
include('elements/materials/Action/Materials3dRotation')
Materials3dRotationCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the Materials3dRotation card
include('elements/materials/Action/Materials3dRotation')
Materials3dRotationCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
