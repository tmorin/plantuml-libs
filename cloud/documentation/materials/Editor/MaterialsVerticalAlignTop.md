# MaterialsVerticalAlignTop
```text
elements/materials/Editor/MaterialsVerticalAlignTop
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsVerticalAlignTop icon](../../../icons/materials/Editor/MaterialsVerticalAlignTop.png) | ![MaterialsVerticalAlignTop element](MaterialsVerticalAlignTop.element.png) | ![MaterialsVerticalAlignTop card](MaterialsVerticalAlignTop.card.png) |
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

' loads the MaterialsVerticalAlignTop element
include('elements/materials/Editor/MaterialsVerticalAlignTop')
MaterialsVerticalAlignTop('element', 'Vertical Align Top', 'an optional tech field')
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

' loads the MaterialsVerticalAlignTop element
include('elements/materials/Editor/MaterialsVerticalAlignTop')
MaterialsVerticalAlignTop('element', 'Vertical Align Top', 'an optional tech field')
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

' loads the MaterialsVerticalAlignTop card
include('elements/materials/Editor/MaterialsVerticalAlignTop')
MaterialsVerticalAlignTopCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsVerticalAlignTop card
include('elements/materials/Editor/MaterialsVerticalAlignTop')
MaterialsVerticalAlignTopCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
