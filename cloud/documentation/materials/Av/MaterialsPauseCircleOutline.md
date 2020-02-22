# MaterialsPauseCircleOutline
```text
elements/materials/Av/MaterialsPauseCircleOutline
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsPauseCircleOutline icon](../../../icons/materials/Av/MaterialsPauseCircleOutline.png) | ![MaterialsPauseCircleOutline element](MaterialsPauseCircleOutline.element.png) | ![MaterialsPauseCircleOutline card](MaterialsPauseCircleOutline.card.png) |
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

' loads the MaterialsPauseCircleOutline element
include('elements/materials/Av/MaterialsPauseCircleOutline')
MaterialsPauseCircleOutline('element', 'Pause Circle Outline', 'an optional tech field')
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

' loads the MaterialsPauseCircleOutline element
include('elements/materials/Av/MaterialsPauseCircleOutline')
MaterialsPauseCircleOutline('element', 'Pause Circle Outline', 'an optional tech field')
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

' loads the MaterialsPauseCircleOutline card
include('elements/materials/Av/MaterialsPauseCircleOutline')
MaterialsPauseCircleOutlineCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsPauseCircleOutline card
include('elements/materials/Av/MaterialsPauseCircleOutline')
MaterialsPauseCircleOutlineCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
