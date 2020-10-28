# MaterialsLooks6
```text
elements/materials/Image/MaterialsLooks6
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsLooks6 icon](../../../icons/materials/Image/MaterialsLooks6.png) | ![MaterialsLooks6 element](MaterialsLooks6.element.png) | ![MaterialsLooks6 card](MaterialsLooks6.card.png) |
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

' loads the MaterialsLooks6 element
include('elements/materials/Image/MaterialsLooks6')
MaterialsLooks6('element', 'Looks6', 'an optional tech field')
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

' loads the MaterialsLooks6 element
include('elements/materials/Image/MaterialsLooks6')
MaterialsLooks6('element', 'Looks6', 'an optional tech field')
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

' loads the MaterialsLooks6 card
include('elements/materials/Image/MaterialsLooks6')
MaterialsLooks6Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsLooks6 card
include('elements/materials/Image/MaterialsLooks6')
MaterialsLooks6Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
