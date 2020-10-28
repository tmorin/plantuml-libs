# MaterialsFilter9
```text
elements/materials/Image/MaterialsFilter9
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsFilter9 icon](../../../icons/materials/Image/MaterialsFilter9.png) | ![MaterialsFilter9 element](MaterialsFilter9.element.png) | ![MaterialsFilter9 card](MaterialsFilter9.card.png) |
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

' loads the MaterialsFilter9 element
include('elements/materials/Image/MaterialsFilter9')
MaterialsFilter9('element', 'Filter9', 'an optional tech field')
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

' loads the MaterialsFilter9 element
include('elements/materials/Image/MaterialsFilter9')
MaterialsFilter9('element', 'Filter9', 'an optional tech field')
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

' loads the MaterialsFilter9 card
include('elements/materials/Image/MaterialsFilter9')
MaterialsFilter9Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsFilter9 card
include('elements/materials/Image/MaterialsFilter9')
MaterialsFilter9Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
