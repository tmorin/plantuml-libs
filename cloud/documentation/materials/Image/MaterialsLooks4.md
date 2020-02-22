# MaterialsLooks4
```text
elements/materials/Image/MaterialsLooks4
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsLooks4 icon](../../../icons/materials/Image/MaterialsLooks4.png) | ![MaterialsLooks4 element](MaterialsLooks4.element.png) | ![MaterialsLooks4 card](MaterialsLooks4.card.png) |
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

' loads the MaterialsLooks4 element
include('elements/materials/Image/MaterialsLooks4')
MaterialsLooks4('element', 'Looks4', 'an optional tech field')
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

' loads the MaterialsLooks4 element
include('elements/materials/Image/MaterialsLooks4')
MaterialsLooks4('element', 'Looks4', 'an optional tech field')
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

' loads the MaterialsLooks4 card
include('elements/materials/Image/MaterialsLooks4')
MaterialsLooks4Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsLooks4 card
include('elements/materials/Image/MaterialsLooks4')
MaterialsLooks4Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
