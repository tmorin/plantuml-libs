# MaterialsFilterList
```text
elements/materials/Content/MaterialsFilterList
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsFilterList icon](../../../icons/materials/Content/MaterialsFilterList.png) | ![MaterialsFilterList element](MaterialsFilterList.element.png) | ![MaterialsFilterList card](MaterialsFilterList.card.png) |
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

' loads the MaterialsFilterList element
include('elements/materials/Content/MaterialsFilterList')
MaterialsFilterList('element', 'Filter List', 'an optional tech field')
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

' loads the MaterialsFilterList element
include('elements/materials/Content/MaterialsFilterList')
MaterialsFilterList('element', 'Filter List', 'an optional tech field')
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

' loads the MaterialsFilterList card
include('elements/materials/Content/MaterialsFilterList')
MaterialsFilterListCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsFilterList card
include('elements/materials/Content/MaterialsFilterList')
MaterialsFilterListCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
