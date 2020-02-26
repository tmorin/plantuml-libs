# MaterialsFilterBAndW
```text
elements/materials/Image/MaterialsFilterBAndW
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsFilterBAndW icon](../../../icons/materials/Image/MaterialsFilterBAndW.png) | ![MaterialsFilterBAndW element](MaterialsFilterBAndW.element.png) | ![MaterialsFilterBAndW card](MaterialsFilterBAndW.card.png) |
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

' loads the MaterialsFilterBAndW element
include('elements/materials/Image/MaterialsFilterBAndW')
MaterialsFilterBAndW('element', 'Filter B And W', 'an optional tech field')
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

' loads the MaterialsFilterBAndW element
include('elements/materials/Image/MaterialsFilterBAndW')
MaterialsFilterBAndW('element', 'Filter B And W', 'an optional tech field')
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

' loads the MaterialsFilterBAndW card
include('elements/materials/Image/MaterialsFilterBAndW')
MaterialsFilterBAndWCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsFilterBAndW card
include('elements/materials/Image/MaterialsFilterBAndW')
MaterialsFilterBAndWCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
