# MaterialsRotateRight
```text
elements/materials/Image/MaterialsRotateRight
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsRotateRight icon](../../../icons/materials/Image/MaterialsRotateRight.png) | ![MaterialsRotateRight element](MaterialsRotateRight.element.png) | ![MaterialsRotateRight card](MaterialsRotateRight.card.png) |
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

' loads the MaterialsRotateRight element
include('elements/materials/Image/MaterialsRotateRight')
MaterialsRotateRight('element', 'Rotate Right', 'an optional tech field')
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

' loads the MaterialsRotateRight element
include('elements/materials/Image/MaterialsRotateRight')
MaterialsRotateRight('element', 'Rotate Right', 'an optional tech field')
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

' loads the MaterialsRotateRight card
include('elements/materials/Image/MaterialsRotateRight')
MaterialsRotateRightCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsRotateRight card
include('elements/materials/Image/MaterialsRotateRight')
MaterialsRotateRightCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
