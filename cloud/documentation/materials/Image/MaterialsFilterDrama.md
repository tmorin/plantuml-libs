# MaterialsFilterDrama
```text
elements/materials/Image/MaterialsFilterDrama
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsFilterDrama icon](../../../icons/materials/Image/MaterialsFilterDrama.png) | ![MaterialsFilterDrama element](MaterialsFilterDrama.element.png) | ![MaterialsFilterDrama card](MaterialsFilterDrama.card.png) |
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

' loads the MaterialsFilterDrama element
include('elements/materials/Image/MaterialsFilterDrama')
MaterialsFilterDrama('element', 'Filter Drama', 'an optional tech field')
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

' loads the MaterialsFilterDrama element
include('elements/materials/Image/MaterialsFilterDrama')
MaterialsFilterDrama('element', 'Filter Drama', 'an optional tech field')
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

' loads the MaterialsFilterDrama card
include('elements/materials/Image/MaterialsFilterDrama')
MaterialsFilterDramaCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsFilterDrama card
include('elements/materials/Image/MaterialsFilterDrama')
MaterialsFilterDramaCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
