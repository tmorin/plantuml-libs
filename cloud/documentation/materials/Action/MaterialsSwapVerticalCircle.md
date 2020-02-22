# MaterialsSwapVerticalCircle
```text
elements/materials/Action/MaterialsSwapVerticalCircle
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSwapVerticalCircle icon](../../../icons/materials/Action/MaterialsSwapVerticalCircle.png) | ![MaterialsSwapVerticalCircle element](MaterialsSwapVerticalCircle.element.png) | ![MaterialsSwapVerticalCircle card](MaterialsSwapVerticalCircle.card.png) |
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

' loads the MaterialsSwapVerticalCircle element
include('elements/materials/Action/MaterialsSwapVerticalCircle')
MaterialsSwapVerticalCircle('element', 'Swap Vertical Circle', 'an optional tech field')
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

' loads the MaterialsSwapVerticalCircle element
include('elements/materials/Action/MaterialsSwapVerticalCircle')
MaterialsSwapVerticalCircle('element', 'Swap Vertical Circle', 'an optional tech field')
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

' loads the MaterialsSwapVerticalCircle card
include('elements/materials/Action/MaterialsSwapVerticalCircle')
MaterialsSwapVerticalCircleCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsSwapVerticalCircle card
include('elements/materials/Action/MaterialsSwapVerticalCircle')
MaterialsSwapVerticalCircleCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
