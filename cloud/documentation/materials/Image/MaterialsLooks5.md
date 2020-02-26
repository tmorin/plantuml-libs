# MaterialsLooks5
```text
elements/materials/Image/MaterialsLooks5
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsLooks5 icon](../../../icons/materials/Image/MaterialsLooks5.png) | ![MaterialsLooks5 element](MaterialsLooks5.element.png) | ![MaterialsLooks5 card](MaterialsLooks5.card.png) |
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

' loads the MaterialsLooks5 element
include('elements/materials/Image/MaterialsLooks5')
MaterialsLooks5('element', 'Looks5', 'an optional tech field')
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

' loads the MaterialsLooks5 element
include('elements/materials/Image/MaterialsLooks5')
MaterialsLooks5('element', 'Looks5', 'an optional tech field')
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

' loads the MaterialsLooks5 card
include('elements/materials/Image/MaterialsLooks5')
MaterialsLooks5Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsLooks5 card
include('elements/materials/Image/MaterialsLooks5')
MaterialsLooks5Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
