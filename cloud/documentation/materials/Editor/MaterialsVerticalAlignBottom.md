# MaterialsVerticalAlignBottom
```text
elements/materials/Editor/MaterialsVerticalAlignBottom
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsVerticalAlignBottom icon](../../../icons/materials/Editor/MaterialsVerticalAlignBottom.png) | ![MaterialsVerticalAlignBottom element](MaterialsVerticalAlignBottom.element.png) | ![MaterialsVerticalAlignBottom card](MaterialsVerticalAlignBottom.card.png) |
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

' loads the MaterialsVerticalAlignBottom element
include('elements/materials/Editor/MaterialsVerticalAlignBottom')
MaterialsVerticalAlignBottom('element', 'Vertical Align Bottom', 'an optional tech field')
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

' loads the MaterialsVerticalAlignBottom element
include('elements/materials/Editor/MaterialsVerticalAlignBottom')
MaterialsVerticalAlignBottom('element', 'Vertical Align Bottom', 'an optional tech field')
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

' loads the MaterialsVerticalAlignBottom card
include('elements/materials/Editor/MaterialsVerticalAlignBottom')
MaterialsVerticalAlignBottomCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsVerticalAlignBottom card
include('elements/materials/Editor/MaterialsVerticalAlignBottom')
MaterialsVerticalAlignBottomCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
