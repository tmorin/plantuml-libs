# MaterialsHotTub
```text
elements/materials/Places/MaterialsHotTub
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsHotTub icon](../../../icons/materials/Places/MaterialsHotTub.png) | ![MaterialsHotTub element](MaterialsHotTub.element.png) | ![MaterialsHotTub card](MaterialsHotTub.card.png) |
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

' loads the MaterialsHotTub element
include('elements/materials/Places/MaterialsHotTub')
MaterialsHotTub('element', 'Hot Tub', 'an optional tech field')
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

' loads the MaterialsHotTub element
include('elements/materials/Places/MaterialsHotTub')
MaterialsHotTub('element', 'Hot Tub', 'an optional tech field')
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

' loads the MaterialsHotTub card
include('elements/materials/Places/MaterialsHotTub')
MaterialsHotTubCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsHotTub card
include('elements/materials/Places/MaterialsHotTub')
MaterialsHotTubCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
