# MaterialsAirportShuttle
```text
elements/materials/Places/MaterialsAirportShuttle
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsAirportShuttle icon](../../../icons/materials/Places/MaterialsAirportShuttle.png) | ![MaterialsAirportShuttle element](MaterialsAirportShuttle.element.png) | ![MaterialsAirportShuttle card](MaterialsAirportShuttle.card.png) |
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

' loads the MaterialsAirportShuttle element
include('elements/materials/Places/MaterialsAirportShuttle')
MaterialsAirportShuttle('element', 'Airport Shuttle', 'an optional tech field')
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

' loads the MaterialsAirportShuttle element
include('elements/materials/Places/MaterialsAirportShuttle')
MaterialsAirportShuttle('element', 'Airport Shuttle', 'an optional tech field')
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

' loads the MaterialsAirportShuttle card
include('elements/materials/Places/MaterialsAirportShuttle')
MaterialsAirportShuttleCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsAirportShuttle card
include('elements/materials/Places/MaterialsAirportShuttle')
MaterialsAirportShuttleCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
