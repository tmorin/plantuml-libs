# AwsAutoScaling
```text
elements/aws/ManagementGovernance/AwsAutoScaling
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsAutoScaling icon](../../../icons/aws/ManagementGovernance/AwsAutoScaling.png) | ![AwsAutoScaling element](AwsAutoScaling.element.png) | ![AwsAutoScaling card](AwsAutoScaling.card.png) |
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

' loads the AwsAutoScaling element
include('elements/aws/ManagementGovernance/AwsAutoScaling')
AwsAutoScaling('element', 'Auto Scaling', 'an optional tech field')
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

' loads the AwsAutoScaling element
include('elements/aws/ManagementGovernance/AwsAutoScaling')
AwsAutoScaling('element', 'Auto Scaling', 'an optional tech field')
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

' loads the AwsAutoScaling card
include('elements/aws/ManagementGovernance/AwsAutoScaling')
AwsAutoScalingCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsAutoScaling card
include('elements/aws/ManagementGovernance/AwsAutoScaling')
AwsAutoScalingCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
