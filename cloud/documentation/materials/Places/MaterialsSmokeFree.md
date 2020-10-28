# MaterialsSmokeFree
```text
elements/materials/Places/MaterialsSmokeFree
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSmokeFree icon](../../../icons/materials/Places/MaterialsSmokeFree.png) | ![MaterialsSmokeFree element](MaterialsSmokeFree.element.png) | ![MaterialsSmokeFree card](MaterialsSmokeFree.card.png) |
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

' loads the MaterialsSmokeFree element
include('elements/materials/Places/MaterialsSmokeFree')
MaterialsSmokeFree('element', 'Smoke Free', 'an optional tech field')
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

' loads the MaterialsSmokeFree element
include('elements/materials/Places/MaterialsSmokeFree')
MaterialsSmokeFree('element', 'Smoke Free', 'an optional tech field')
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

' loads the MaterialsSmokeFree card
include('elements/materials/Places/MaterialsSmokeFree')
MaterialsSmokeFreeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsSmokeFree card
include('elements/materials/Places/MaterialsSmokeFree')
MaterialsSmokeFreeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
