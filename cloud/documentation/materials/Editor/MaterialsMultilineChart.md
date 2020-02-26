# MaterialsMultilineChart
```text
elements/materials/Editor/MaterialsMultilineChart
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsMultilineChart icon](../../../icons/materials/Editor/MaterialsMultilineChart.png) | ![MaterialsMultilineChart element](MaterialsMultilineChart.element.png) | ![MaterialsMultilineChart card](MaterialsMultilineChart.card.png) |
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

' loads the MaterialsMultilineChart element
include('elements/materials/Editor/MaterialsMultilineChart')
MaterialsMultilineChart('element', 'Multiline Chart', 'an optional tech field')
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

' loads the MaterialsMultilineChart element
include('elements/materials/Editor/MaterialsMultilineChart')
MaterialsMultilineChart('element', 'Multiline Chart', 'an optional tech field')
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

' loads the MaterialsMultilineChart card
include('elements/materials/Editor/MaterialsMultilineChart')
MaterialsMultilineChartCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsMultilineChart card
include('elements/materials/Editor/MaterialsMultilineChart')
MaterialsMultilineChartCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
