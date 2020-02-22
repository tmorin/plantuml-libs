# MaterialsNetworkCell
```text
elements/materials/Device/MaterialsNetworkCell
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsNetworkCell icon](../../../icons/materials/Device/MaterialsNetworkCell.png) | ![MaterialsNetworkCell element](MaterialsNetworkCell.element.png) | ![MaterialsNetworkCell card](MaterialsNetworkCell.card.png) |
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

' loads the MaterialsNetworkCell element
include('elements/materials/Device/MaterialsNetworkCell')
MaterialsNetworkCell('element', 'Network Cell', 'an optional tech field')
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

' loads the MaterialsNetworkCell element
include('elements/materials/Device/MaterialsNetworkCell')
MaterialsNetworkCell('element', 'Network Cell', 'an optional tech field')
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

' loads the MaterialsNetworkCell card
include('elements/materials/Device/MaterialsNetworkCell')
MaterialsNetworkCellCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsNetworkCell card
include('elements/materials/Device/MaterialsNetworkCell')
MaterialsNetworkCellCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
