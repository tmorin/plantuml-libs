# MaterialsLinkedCamera
```text
elements/materials/Image/MaterialsLinkedCamera
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsLinkedCamera icon](../../../icons/materials/Image/MaterialsLinkedCamera.png) | ![MaterialsLinkedCamera element](MaterialsLinkedCamera.element.png) | ![MaterialsLinkedCamera card](MaterialsLinkedCamera.card.png) |
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

' loads the MaterialsLinkedCamera element
include('elements/materials/Image/MaterialsLinkedCamera')
MaterialsLinkedCamera('element', 'Linked Camera', 'an optional tech field')
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

' loads the MaterialsLinkedCamera element
include('elements/materials/Image/MaterialsLinkedCamera')
MaterialsLinkedCamera('element', 'Linked Camera', 'an optional tech field')
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

' loads the MaterialsLinkedCamera card
include('elements/materials/Image/MaterialsLinkedCamera')
MaterialsLinkedCameraCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsLinkedCamera card
include('elements/materials/Image/MaterialsLinkedCamera')
MaterialsLinkedCameraCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
