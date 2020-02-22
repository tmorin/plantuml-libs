# MaterialsArrowForward
```text
elements/materials/Navigation/MaterialsArrowForward
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsArrowForward icon](../../../icons/materials/Navigation/MaterialsArrowForward.png) | ![MaterialsArrowForward element](MaterialsArrowForward.element.png) | ![MaterialsArrowForward card](MaterialsArrowForward.card.png) |
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

' loads the MaterialsArrowForward element
include('elements/materials/Navigation/MaterialsArrowForward')
MaterialsArrowForward('element', 'Arrow Forward', 'an optional tech field')
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

' loads the MaterialsArrowForward element
include('elements/materials/Navigation/MaterialsArrowForward')
MaterialsArrowForward('element', 'Arrow Forward', 'an optional tech field')
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

' loads the MaterialsArrowForward card
include('elements/materials/Navigation/MaterialsArrowForward')
MaterialsArrowForwardCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsArrowForward card
include('elements/materials/Navigation/MaterialsArrowForward')
MaterialsArrowForwardCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
