# MaterialsDirectionsSubway
```text
elements/materials/Maps/MaterialsDirectionsSubway
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsDirectionsSubway icon](../../../icons/materials/Maps/MaterialsDirectionsSubway.png) | ![MaterialsDirectionsSubway element](MaterialsDirectionsSubway.element.png) | ![MaterialsDirectionsSubway card](MaterialsDirectionsSubway.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the AWS style
include('styles/aws')

' loads the MaterialsDirectionsSubway element
include('elements/materials/Maps/MaterialsDirectionsSubway')
MaterialsDirectionsSubway('element', 'Directions Subway', 'an optional tech field')
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

' loads the AWS style
include('styles/aws')

' loads the MaterialsDirectionsSubway element
include('elements/materials/Maps/MaterialsDirectionsSubway')
MaterialsDirectionsSubway('element', 'Directions Subway', 'an optional tech field')
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

' loads the AWS style
include('styles/gcp')

' loads the MaterialsDirectionsSubway card
include('elements/materials/Maps/MaterialsDirectionsSubway')
MaterialsDirectionsSubwayCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GCP style
include('styles/gcp')

' loads the MaterialsDirectionsSubway card
include('elements/materials/Maps/MaterialsDirectionsSubway')
MaterialsDirectionsSubwayCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
