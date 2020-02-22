# MaterialsRemoveCircleOutline
```text
elements/materials/Content/MaterialsRemoveCircleOutline
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsRemoveCircleOutline icon](../../../icons/materials/Content/MaterialsRemoveCircleOutline.png) | ![MaterialsRemoveCircleOutline element](MaterialsRemoveCircleOutline.element.png) | ![MaterialsRemoveCircleOutline card](MaterialsRemoveCircleOutline.card.png) |
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

' loads the MaterialsRemoveCircleOutline element
include('elements/materials/Content/MaterialsRemoveCircleOutline')
MaterialsRemoveCircleOutline('element', 'Remove Circle Outline', 'an optional tech field')
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

' loads the MaterialsRemoveCircleOutline element
include('elements/materials/Content/MaterialsRemoveCircleOutline')
MaterialsRemoveCircleOutline('element', 'Remove Circle Outline', 'an optional tech field')
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

' loads the MaterialsRemoveCircleOutline card
include('elements/materials/Content/MaterialsRemoveCircleOutline')
MaterialsRemoveCircleOutlineCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsRemoveCircleOutline card
include('elements/materials/Content/MaterialsRemoveCircleOutline')
MaterialsRemoveCircleOutlineCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
