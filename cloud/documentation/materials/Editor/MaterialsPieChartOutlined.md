# MaterialsPieChartOutlined
```text
elements/materials/Editor/MaterialsPieChartOutlined
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsPieChartOutlined icon](../../../icons/materials/Editor/MaterialsPieChartOutlined.png) | ![MaterialsPieChartOutlined element](MaterialsPieChartOutlined.element.png) | ![MaterialsPieChartOutlined card](MaterialsPieChartOutlined.card.png) |
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

' loads the MaterialsPieChartOutlined element
include('elements/materials/Editor/MaterialsPieChartOutlined')
MaterialsPieChartOutlined('element', 'Pie Chart Outlined', 'an optional tech field')
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

' loads the MaterialsPieChartOutlined element
include('elements/materials/Editor/MaterialsPieChartOutlined')
MaterialsPieChartOutlined('element', 'Pie Chart Outlined', 'an optional tech field')
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

' loads the MaterialsPieChartOutlined card
include('elements/materials/Editor/MaterialsPieChartOutlined')
MaterialsPieChartOutlinedCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsPieChartOutlined card
include('elements/materials/Editor/MaterialsPieChartOutlined')
MaterialsPieChartOutlinedCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
