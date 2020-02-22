# MaterialsSwapVert
```text
elements/materials/Action/MaterialsSwapVert
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSwapVert icon](../../../icons/materials/Action/MaterialsSwapVert.png) | ![MaterialsSwapVert element](MaterialsSwapVert.element.png) | ![MaterialsSwapVert card](MaterialsSwapVert.card.png) |
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

' loads the MaterialsSwapVert element
include('elements/materials/Action/MaterialsSwapVert')
MaterialsSwapVert('element', 'Swap Vert', 'an optional tech field')
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

' loads the MaterialsSwapVert element
include('elements/materials/Action/MaterialsSwapVert')
MaterialsSwapVert('element', 'Swap Vert', 'an optional tech field')
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

' loads the MaterialsSwapVert card
include('elements/materials/Action/MaterialsSwapVert')
MaterialsSwapVertCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsSwapVert card
include('elements/materials/Action/MaterialsSwapVert')
MaterialsSwapVertCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
