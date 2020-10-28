# MaterialsContentCut
```text
elements/materials/Content/MaterialsContentCut
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsContentCut icon](../../../icons/materials/Content/MaterialsContentCut.png) | ![MaterialsContentCut element](MaterialsContentCut.element.png) | ![MaterialsContentCut card](MaterialsContentCut.card.png) |
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

' loads the MaterialsContentCut element
include('elements/materials/Content/MaterialsContentCut')
MaterialsContentCut('element', 'Content Cut', 'an optional tech field')
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

' loads the MaterialsContentCut element
include('elements/materials/Content/MaterialsContentCut')
MaterialsContentCut('element', 'Content Cut', 'an optional tech field')
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

' loads the MaterialsContentCut card
include('elements/materials/Content/MaterialsContentCut')
MaterialsContentCutCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsContentCut card
include('elements/materials/Content/MaterialsContentCut')
MaterialsContentCutCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
