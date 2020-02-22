# AwsOpsworksResources
```text
elements/aws/ManagementGovernance/AwsOpsworksResources
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsOpsworksResources icon](../../../icons/aws/ManagementGovernance/AwsOpsworksResources.png) | ![AwsOpsworksResources element](AwsOpsworksResources.element.png) | ![AwsOpsworksResources card](AwsOpsworksResources.card.png) |
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

' loads the AwsOpsworksResources element
include('elements/aws/ManagementGovernance/AwsOpsworksResources')
AwsOpsworksResources('element', 'Opsworks Resources', 'an optional tech field')
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

' loads the AwsOpsworksResources element
include('elements/aws/ManagementGovernance/AwsOpsworksResources')
AwsOpsworksResources('element', 'Opsworks Resources', 'an optional tech field')
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

' loads the AwsOpsworksResources card
include('elements/aws/ManagementGovernance/AwsOpsworksResources')
AwsOpsworksResourcesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsOpsworksResources card
include('elements/aws/ManagementGovernance/AwsOpsworksResources')
AwsOpsworksResourcesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
