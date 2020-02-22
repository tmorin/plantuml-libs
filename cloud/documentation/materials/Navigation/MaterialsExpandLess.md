# MaterialsExpandLess
```text
elements/materials/Navigation/MaterialsExpandLess
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsExpandLess icon](../../../icons/materials/Navigation/MaterialsExpandLess.png) | ![MaterialsExpandLess element](MaterialsExpandLess.element.png) | ![MaterialsExpandLess card](MaterialsExpandLess.card.png) |
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

' loads the MaterialsExpandLess element
include('elements/materials/Navigation/MaterialsExpandLess')
MaterialsExpandLess('element', 'Expand Less', 'an optional tech field')
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

' loads the MaterialsExpandLess element
include('elements/materials/Navigation/MaterialsExpandLess')
MaterialsExpandLess('element', 'Expand Less', 'an optional tech field')
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

' loads the MaterialsExpandLess card
include('elements/materials/Navigation/MaterialsExpandLess')
MaterialsExpandLessCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsExpandLess card
include('elements/materials/Navigation/MaterialsExpandLess')
MaterialsExpandLessCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
