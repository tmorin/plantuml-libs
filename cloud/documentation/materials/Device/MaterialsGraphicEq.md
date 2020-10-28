# MaterialsGraphicEq
```text
elements/materials/Device/MaterialsGraphicEq
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsGraphicEq icon](../../../icons/materials/Device/MaterialsGraphicEq.png) | ![MaterialsGraphicEq element](MaterialsGraphicEq.element.png) | ![MaterialsGraphicEq card](MaterialsGraphicEq.card.png) |
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

' loads the MaterialsGraphicEq element
include('elements/materials/Device/MaterialsGraphicEq')
MaterialsGraphicEq('element', 'Graphic Eq', 'an optional tech field')
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

' loads the MaterialsGraphicEq element
include('elements/materials/Device/MaterialsGraphicEq')
MaterialsGraphicEq('element', 'Graphic Eq', 'an optional tech field')
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

' loads the MaterialsGraphicEq card
include('elements/materials/Device/MaterialsGraphicEq')
MaterialsGraphicEqCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsGraphicEq card
include('elements/materials/Device/MaterialsGraphicEq')
MaterialsGraphicEqCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
