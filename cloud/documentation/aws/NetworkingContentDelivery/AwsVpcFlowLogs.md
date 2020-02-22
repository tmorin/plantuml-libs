# AwsVpcFlowLogs
```text
elements/aws/NetworkingContentDelivery/AwsVpcFlowLogs
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsVpcFlowLogs icon](../../../icons/aws/NetworkingContentDelivery/AwsVpcFlowLogs.png) | ![AwsVpcFlowLogs element](AwsVpcFlowLogs.element.png) | ![AwsVpcFlowLogs card](AwsVpcFlowLogs.card.png) |
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

' loads the AwsVpcFlowLogs element
include('elements/aws/NetworkingContentDelivery/AwsVpcFlowLogs')
AwsVpcFlowLogs('element', 'Vpc Flow Logs', 'an optional tech field')
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

' loads the AwsVpcFlowLogs element
include('elements/aws/NetworkingContentDelivery/AwsVpcFlowLogs')
AwsVpcFlowLogs('element', 'Vpc Flow Logs', 'an optional tech field')
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

' loads the AwsVpcFlowLogs card
include('elements/aws/NetworkingContentDelivery/AwsVpcFlowLogs')
AwsVpcFlowLogsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsVpcFlowLogs card
include('elements/aws/NetworkingContentDelivery/AwsVpcFlowLogs')
AwsVpcFlowLogsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
