# AwsOpsworksMonitoring
```text
elements/aws/ManagementGovernance/AwsOpsworksMonitoring
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsOpsworksMonitoring icon](../../../icons/aws/ManagementGovernance/AwsOpsworksMonitoring.png) | ![AwsOpsworksMonitoring element](AwsOpsworksMonitoring.element.png) | ![AwsOpsworksMonitoring card](AwsOpsworksMonitoring.card.png) |
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

' loads the AwsOpsworksMonitoring element
include('elements/aws/ManagementGovernance/AwsOpsworksMonitoring')
AwsOpsworksMonitoring('element', 'Opsworks Monitoring', 'an optional tech field')
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

' loads the AwsOpsworksMonitoring element
include('elements/aws/ManagementGovernance/AwsOpsworksMonitoring')
AwsOpsworksMonitoring('element', 'Opsworks Monitoring', 'an optional tech field')
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

' loads the AwsOpsworksMonitoring card
include('elements/aws/ManagementGovernance/AwsOpsworksMonitoring')
AwsOpsworksMonitoringCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsOpsworksMonitoring card
include('elements/aws/ManagementGovernance/AwsOpsworksMonitoring')
AwsOpsworksMonitoringCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
