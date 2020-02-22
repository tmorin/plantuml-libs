# MaterialsCardTravel
```text
elements/materials/Action/MaterialsCardTravel
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsCardTravel icon](../../../icons/materials/Action/MaterialsCardTravel.png) | ![MaterialsCardTravel element](MaterialsCardTravel.element.png) | ![MaterialsCardTravel card](MaterialsCardTravel.card.png) |
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

' loads the MaterialsCardTravel element
include('elements/materials/Action/MaterialsCardTravel')
MaterialsCardTravel('element', 'Card Travel', 'an optional tech field')
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

' loads the MaterialsCardTravel element
include('elements/materials/Action/MaterialsCardTravel')
MaterialsCardTravel('element', 'Card Travel', 'an optional tech field')
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

' loads the MaterialsCardTravel card
include('elements/materials/Action/MaterialsCardTravel')
MaterialsCardTravelCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsCardTravel card
include('elements/materials/Action/MaterialsCardTravel')
MaterialsCardTravelCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
