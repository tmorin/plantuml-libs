# MaterialsFlashAuto
```text
elements/materials/Image/MaterialsFlashAuto
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsFlashAuto icon](../../../icons/materials/Image/MaterialsFlashAuto.png) | ![MaterialsFlashAuto element](MaterialsFlashAuto.element.png) | ![MaterialsFlashAuto card](MaterialsFlashAuto.card.png) |
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

' loads the MaterialsFlashAuto element
include('elements/materials/Image/MaterialsFlashAuto')
MaterialsFlashAuto('element', 'Flash Auto', 'an optional tech field')
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

' loads the MaterialsFlashAuto element
include('elements/materials/Image/MaterialsFlashAuto')
MaterialsFlashAuto('element', 'Flash Auto', 'an optional tech field')
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

' loads the MaterialsFlashAuto card
include('elements/materials/Image/MaterialsFlashAuto')
MaterialsFlashAutoCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsFlashAuto card
include('elements/materials/Image/MaterialsFlashAuto')
MaterialsFlashAutoCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
