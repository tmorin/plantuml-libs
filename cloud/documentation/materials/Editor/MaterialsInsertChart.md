# MaterialsInsertChart
```text
elements/materials/Editor/MaterialsInsertChart
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsInsertChart icon](../../../icons/materials/Editor/MaterialsInsertChart.png) | ![MaterialsInsertChart element](MaterialsInsertChart.element.png) | ![MaterialsInsertChart card](MaterialsInsertChart.card.png) |
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

' loads the MaterialsInsertChart element
include('elements/materials/Editor/MaterialsInsertChart')
MaterialsInsertChart('element', 'Insert Chart', 'an optional tech field')
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

' loads the MaterialsInsertChart element
include('elements/materials/Editor/MaterialsInsertChart')
MaterialsInsertChart('element', 'Insert Chart', 'an optional tech field')
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

' loads the MaterialsInsertChart card
include('elements/materials/Editor/MaterialsInsertChart')
MaterialsInsertChartCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsInsertChart card
include('elements/materials/Editor/MaterialsInsertChart')
MaterialsInsertChartCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
