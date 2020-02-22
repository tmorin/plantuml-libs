# MaterialsViewComfy
```text
elements/materials/Image/MaterialsViewComfy
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsViewComfy icon](../../../icons/materials/Image/MaterialsViewComfy.png) | ![MaterialsViewComfy element](MaterialsViewComfy.element.png) | ![MaterialsViewComfy card](MaterialsViewComfy.card.png) |
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

' loads the MaterialsViewComfy element
include('elements/materials/Image/MaterialsViewComfy')
MaterialsViewComfy('element', 'View Comfy', 'an optional tech field')
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

' loads the MaterialsViewComfy element
include('elements/materials/Image/MaterialsViewComfy')
MaterialsViewComfy('element', 'View Comfy', 'an optional tech field')
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

' loads the MaterialsViewComfy card
include('elements/materials/Image/MaterialsViewComfy')
MaterialsViewComfyCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsViewComfy card
include('elements/materials/Image/MaterialsViewComfy')
MaterialsViewComfyCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
