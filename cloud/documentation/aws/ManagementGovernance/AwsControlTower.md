# AwsControlTower
```text
elements/aws/ManagementGovernance/AwsControlTower
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsControlTower icon](../../../icons/aws/ManagementGovernance/AwsControlTower.png) | ![AwsControlTower element](AwsControlTower.element.png) | ![AwsControlTower card](AwsControlTower.card.png) |
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

' loads the AwsControlTower element
include('elements/aws/ManagementGovernance/AwsControlTower')
AwsControlTower('element', 'Control Tower', 'an optional tech field')
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

' loads the AwsControlTower element
include('elements/aws/ManagementGovernance/AwsControlTower')
AwsControlTower('element', 'Control Tower', 'an optional tech field')
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

' loads the AwsControlTower card
include('elements/aws/ManagementGovernance/AwsControlTower')
AwsControlTowerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsControlTower card
include('elements/aws/ManagementGovernance/AwsControlTower')
AwsControlTowerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
