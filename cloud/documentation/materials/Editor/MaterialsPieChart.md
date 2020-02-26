# MaterialsPieChart
```text
elements/materials/Editor/MaterialsPieChart
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsPieChart icon](../../../icons/materials/Editor/MaterialsPieChart.png) | ![MaterialsPieChart element](MaterialsPieChart.element.png) | ![MaterialsPieChart card](MaterialsPieChart.card.png) |
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

' loads the MaterialsPieChart element
include('elements/materials/Editor/MaterialsPieChart')
MaterialsPieChart('element', 'Pie Chart', 'an optional tech field')
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

' loads the MaterialsPieChart element
include('elements/materials/Editor/MaterialsPieChart')
MaterialsPieChart('element', 'Pie Chart', 'an optional tech field')
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

' loads the MaterialsPieChart card
include('elements/materials/Editor/MaterialsPieChart')
MaterialsPieChartCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsPieChart card
include('elements/materials/Editor/MaterialsPieChart')
MaterialsPieChartCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
