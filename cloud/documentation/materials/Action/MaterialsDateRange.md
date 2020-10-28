# MaterialsDateRange
```text
elements/materials/Action/MaterialsDateRange
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsDateRange icon](../../../icons/materials/Action/MaterialsDateRange.png) | ![MaterialsDateRange element](MaterialsDateRange.element.png) | ![MaterialsDateRange card](MaterialsDateRange.card.png) |
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

' loads the MaterialsDateRange element
include('elements/materials/Action/MaterialsDateRange')
MaterialsDateRange('element', 'Date Range', 'an optional tech field')
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

' loads the MaterialsDateRange element
include('elements/materials/Action/MaterialsDateRange')
MaterialsDateRange('element', 'Date Range', 'an optional tech field')
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

' loads the MaterialsDateRange card
include('elements/materials/Action/MaterialsDateRange')
MaterialsDateRangeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsDateRange card
include('elements/materials/Action/MaterialsDateRange')
MaterialsDateRangeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
