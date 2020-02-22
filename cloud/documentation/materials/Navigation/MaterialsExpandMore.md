# MaterialsExpandMore
```text
elements/materials/Navigation/MaterialsExpandMore
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsExpandMore icon](../../../icons/materials/Navigation/MaterialsExpandMore.png) | ![MaterialsExpandMore element](MaterialsExpandMore.element.png) | ![MaterialsExpandMore card](MaterialsExpandMore.card.png) |
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

' loads the MaterialsExpandMore element
include('elements/materials/Navigation/MaterialsExpandMore')
MaterialsExpandMore('element', 'Expand More', 'an optional tech field')
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

' loads the MaterialsExpandMore element
include('elements/materials/Navigation/MaterialsExpandMore')
MaterialsExpandMore('element', 'Expand More', 'an optional tech field')
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

' loads the MaterialsExpandMore card
include('elements/materials/Navigation/MaterialsExpandMore')
MaterialsExpandMoreCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsExpandMore card
include('elements/materials/Navigation/MaterialsExpandMore')
MaterialsExpandMoreCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
