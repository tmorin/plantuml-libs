# AwsOpsworksDeployments
```text
elements/aws/ManagementGovernance/AwsOpsworksDeployments
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsOpsworksDeployments icon](../../../icons/aws/ManagementGovernance/AwsOpsworksDeployments.png) | ![AwsOpsworksDeployments element](AwsOpsworksDeployments.element.png) | ![AwsOpsworksDeployments card](AwsOpsworksDeployments.card.png) |
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

' loads the AwsOpsworksDeployments element
include('elements/aws/ManagementGovernance/AwsOpsworksDeployments')
AwsOpsworksDeployments('element', 'Opsworks Deployments', 'an optional tech field')
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

' loads the AwsOpsworksDeployments element
include('elements/aws/ManagementGovernance/AwsOpsworksDeployments')
AwsOpsworksDeployments('element', 'Opsworks Deployments', 'an optional tech field')
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

' loads the AwsOpsworksDeployments card
include('elements/aws/ManagementGovernance/AwsOpsworksDeployments')
AwsOpsworksDeploymentsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsOpsworksDeployments card
include('elements/aws/ManagementGovernance/AwsOpsworksDeployments')
AwsOpsworksDeploymentsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
