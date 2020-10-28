# MaterialsShowChart
```text
elements/materials/Editor/MaterialsShowChart
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsShowChart icon](../../../icons/materials/Editor/MaterialsShowChart.png) | ![MaterialsShowChart element](MaterialsShowChart.element.png) | ![MaterialsShowChart card](MaterialsShowChart.card.png) |
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

' loads the MaterialsShowChart element
include('elements/materials/Editor/MaterialsShowChart')
MaterialsShowChart('element', 'Show Chart', 'an optional tech field')
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

' loads the MaterialsShowChart element
include('elements/materials/Editor/MaterialsShowChart')
MaterialsShowChart('element', 'Show Chart', 'an optional tech field')
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

' loads the MaterialsShowChart card
include('elements/materials/Editor/MaterialsShowChart')
MaterialsShowChartCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsShowChart card
include('elements/materials/Editor/MaterialsShowChart')
MaterialsShowChartCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
