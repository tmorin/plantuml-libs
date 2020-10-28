# MaterialsBubbleChart
```text
elements/materials/Editor/MaterialsBubbleChart
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsBubbleChart icon](../../../icons/materials/Editor/MaterialsBubbleChart.png) | ![MaterialsBubbleChart element](MaterialsBubbleChart.element.png) | ![MaterialsBubbleChart card](MaterialsBubbleChart.card.png) |
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

' loads the MaterialsBubbleChart element
include('elements/materials/Editor/MaterialsBubbleChart')
MaterialsBubbleChart('element', 'Bubble Chart', 'an optional tech field')
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

' loads the MaterialsBubbleChart element
include('elements/materials/Editor/MaterialsBubbleChart')
MaterialsBubbleChart('element', 'Bubble Chart', 'an optional tech field')
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

' loads the MaterialsBubbleChart card
include('elements/materials/Editor/MaterialsBubbleChart')
MaterialsBubbleChartCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsBubbleChart card
include('elements/materials/Editor/MaterialsBubbleChart')
MaterialsBubbleChartCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
