# AwsOpsworksInstances
```text
elements/aws/ManagementGovernance/AwsOpsworksInstances
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsOpsworksInstances icon](../../../icons/aws/ManagementGovernance/AwsOpsworksInstances.png) | ![AwsOpsworksInstances element](AwsOpsworksInstances.element.png) | ![AwsOpsworksInstances card](AwsOpsworksInstances.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/aws')

' loads the AwsOpsworksInstances element
include('elements/aws/ManagementGovernance/AwsOpsworksInstances')
AwsOpsworksInstances('element', 'Opsworks Instances', 'an optional tech field')
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

' loads the style
include('styles/aws')

' loads the AwsOpsworksInstances element
include('elements/aws/ManagementGovernance/AwsOpsworksInstances')
AwsOpsworksInstances('element', 'Opsworks Instances', 'an optional tech field')
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

' loads the style
include('styles/aws')

' loads the AwsOpsworksInstances card
include('elements/aws/ManagementGovernance/AwsOpsworksInstances')
AwsOpsworksInstancesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the style
include('styles/aws')

' loads the AwsOpsworksInstances card
include('elements/aws/ManagementGovernance/AwsOpsworksInstances')
AwsOpsworksInstancesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
