# MaterialsAirplanemodeActive
```text
elements/materials/Device/MaterialsAirplanemodeActive
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsAirplanemodeActive icon](../../../icons/materials/Device/MaterialsAirplanemodeActive.png) | ![MaterialsAirplanemodeActive element](MaterialsAirplanemodeActive.element.png) | ![MaterialsAirplanemodeActive card](MaterialsAirplanemodeActive.card.png) |
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

' loads the MaterialsAirplanemodeActive element
include('elements/materials/Device/MaterialsAirplanemodeActive')
MaterialsAirplanemodeActive('element', 'Airplanemode Active', 'an optional tech field')
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

' loads the MaterialsAirplanemodeActive element
include('elements/materials/Device/MaterialsAirplanemodeActive')
MaterialsAirplanemodeActive('element', 'Airplanemode Active', 'an optional tech field')
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

' loads the MaterialsAirplanemodeActive card
include('elements/materials/Device/MaterialsAirplanemodeActive')
MaterialsAirplanemodeActiveCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsAirplanemodeActive card
include('elements/materials/Device/MaterialsAirplanemodeActive')
MaterialsAirplanemodeActiveCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
