# MaterialsMoreVert
```text
elements/materials/Navigation/MaterialsMoreVert
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsMoreVert icon](../../../icons/materials/Navigation/MaterialsMoreVert.png) | ![MaterialsMoreVert element](MaterialsMoreVert.element.png) | ![MaterialsMoreVert card](MaterialsMoreVert.card.png) |
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

' loads the MaterialsMoreVert element
include('elements/materials/Navigation/MaterialsMoreVert')
MaterialsMoreVert('element', 'More Vert', 'an optional tech field')
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

' loads the MaterialsMoreVert element
include('elements/materials/Navigation/MaterialsMoreVert')
MaterialsMoreVert('element', 'More Vert', 'an optional tech field')
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

' loads the MaterialsMoreVert card
include('elements/materials/Navigation/MaterialsMoreVert')
MaterialsMoreVertCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsMoreVert card
include('elements/materials/Navigation/MaterialsMoreVert')
MaterialsMoreVertCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
