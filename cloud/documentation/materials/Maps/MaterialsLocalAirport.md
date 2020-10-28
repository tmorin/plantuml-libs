# MaterialsLocalAirport
```text
elements/materials/Maps/MaterialsLocalAirport
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsLocalAirport icon](../../../icons/materials/Maps/MaterialsLocalAirport.png) | ![MaterialsLocalAirport element](MaterialsLocalAirport.element.png) | ![MaterialsLocalAirport card](MaterialsLocalAirport.card.png) |
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

' loads the MaterialsLocalAirport element
include('elements/materials/Maps/MaterialsLocalAirport')
MaterialsLocalAirport('element', 'Local Airport', 'an optional tech field')
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

' loads the MaterialsLocalAirport element
include('elements/materials/Maps/MaterialsLocalAirport')
MaterialsLocalAirport('element', 'Local Airport', 'an optional tech field')
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

' loads the MaterialsLocalAirport card
include('elements/materials/Maps/MaterialsLocalAirport')
MaterialsLocalAirportCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsLocalAirport card
include('elements/materials/Maps/MaterialsLocalAirport')
MaterialsLocalAirportCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
