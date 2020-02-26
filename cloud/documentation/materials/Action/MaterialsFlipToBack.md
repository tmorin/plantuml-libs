# MaterialsFlipToBack
```text
elements/materials/Action/MaterialsFlipToBack
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsFlipToBack icon](../../../icons/materials/Action/MaterialsFlipToBack.png) | ![MaterialsFlipToBack element](MaterialsFlipToBack.element.png) | ![MaterialsFlipToBack card](MaterialsFlipToBack.card.png) |
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

' loads the MaterialsFlipToBack element
include('elements/materials/Action/MaterialsFlipToBack')
MaterialsFlipToBack('element', 'Flip To Back', 'an optional tech field')
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

' loads the MaterialsFlipToBack element
include('elements/materials/Action/MaterialsFlipToBack')
MaterialsFlipToBack('element', 'Flip To Back', 'an optional tech field')
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

' loads the MaterialsFlipToBack card
include('elements/materials/Action/MaterialsFlipToBack')
MaterialsFlipToBackCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsFlipToBack card
include('elements/materials/Action/MaterialsFlipToBack')
MaterialsFlipToBackCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
