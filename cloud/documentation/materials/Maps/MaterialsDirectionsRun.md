# MaterialsDirectionsRun
```text
elements/materials/Maps/MaterialsDirectionsRun
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsDirectionsRun icon](../../../icons/materials/Maps/MaterialsDirectionsRun.png) | ![MaterialsDirectionsRun element](MaterialsDirectionsRun.element.png) | ![MaterialsDirectionsRun card](MaterialsDirectionsRun.card.png) |
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

' loads the MaterialsDirectionsRun element
include('elements/materials/Maps/MaterialsDirectionsRun')
MaterialsDirectionsRun('element', 'Directions Run', 'an optional tech field')
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

' loads the MaterialsDirectionsRun element
include('elements/materials/Maps/MaterialsDirectionsRun')
MaterialsDirectionsRun('element', 'Directions Run', 'an optional tech field')
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

' loads the MaterialsDirectionsRun card
include('elements/materials/Maps/MaterialsDirectionsRun')
MaterialsDirectionsRunCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsDirectionsRun card
include('elements/materials/Maps/MaterialsDirectionsRun')
MaterialsDirectionsRunCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
