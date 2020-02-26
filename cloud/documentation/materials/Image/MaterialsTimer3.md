# MaterialsTimer3
```text
elements/materials/Image/MaterialsTimer3
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsTimer3 icon](../../../icons/materials/Image/MaterialsTimer3.png) | ![MaterialsTimer3 element](MaterialsTimer3.element.png) | ![MaterialsTimer3 card](MaterialsTimer3.card.png) |
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

' loads the MaterialsTimer3 element
include('elements/materials/Image/MaterialsTimer3')
MaterialsTimer3('element', 'Timer3', 'an optional tech field')
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

' loads the MaterialsTimer3 element
include('elements/materials/Image/MaterialsTimer3')
MaterialsTimer3('element', 'Timer3', 'an optional tech field')
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

' loads the MaterialsTimer3 card
include('elements/materials/Image/MaterialsTimer3')
MaterialsTimer3Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsTimer3 card
include('elements/materials/Image/MaterialsTimer3')
MaterialsTimer3Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
