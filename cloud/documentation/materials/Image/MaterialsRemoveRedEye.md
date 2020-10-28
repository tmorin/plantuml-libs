# MaterialsRemoveRedEye
```text
elements/materials/Image/MaterialsRemoveRedEye
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsRemoveRedEye icon](../../../icons/materials/Image/MaterialsRemoveRedEye.png) | ![MaterialsRemoveRedEye element](MaterialsRemoveRedEye.element.png) | ![MaterialsRemoveRedEye card](MaterialsRemoveRedEye.card.png) |
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

' loads the MaterialsRemoveRedEye element
include('elements/materials/Image/MaterialsRemoveRedEye')
MaterialsRemoveRedEye('element', 'Remove Red Eye', 'an optional tech field')
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

' loads the MaterialsRemoveRedEye element
include('elements/materials/Image/MaterialsRemoveRedEye')
MaterialsRemoveRedEye('element', 'Remove Red Eye', 'an optional tech field')
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

' loads the MaterialsRemoveRedEye card
include('elements/materials/Image/MaterialsRemoveRedEye')
MaterialsRemoveRedEyeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsRemoveRedEye card
include('elements/materials/Image/MaterialsRemoveRedEye')
MaterialsRemoveRedEyeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
