# MaterialsFilterVintage
```text
elements/materials/Image/MaterialsFilterVintage
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsFilterVintage icon](../../../icons/materials/Image/MaterialsFilterVintage.png) | ![MaterialsFilterVintage element](MaterialsFilterVintage.element.png) | ![MaterialsFilterVintage card](MaterialsFilterVintage.card.png) |
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

' loads the MaterialsFilterVintage element
include('elements/materials/Image/MaterialsFilterVintage')
MaterialsFilterVintage('element', 'Filter Vintage', 'an optional tech field')
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

' loads the MaterialsFilterVintage element
include('elements/materials/Image/MaterialsFilterVintage')
MaterialsFilterVintage('element', 'Filter Vintage', 'an optional tech field')
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

' loads the MaterialsFilterVintage card
include('elements/materials/Image/MaterialsFilterVintage')
MaterialsFilterVintageCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsFilterVintage card
include('elements/materials/Image/MaterialsFilterVintage')
MaterialsFilterVintageCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
