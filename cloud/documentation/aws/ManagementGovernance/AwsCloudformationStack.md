# AwsCloudformationStack
```text
elements/aws/ManagementGovernance/AwsCloudformationStack
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsCloudformationStack icon](../../../icons/aws/ManagementGovernance/AwsCloudformationStack.png) | ![AwsCloudformationStack element](AwsCloudformationStack.element.png) | ![AwsCloudformationStack card](AwsCloudformationStack.card.png) |
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

' loads the AwsCloudformationStack element
include('elements/aws/ManagementGovernance/AwsCloudformationStack')
AwsCloudformationStack('element', 'Cloudformation Stack', 'an optional tech field')
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

' loads the AwsCloudformationStack element
include('elements/aws/ManagementGovernance/AwsCloudformationStack')
AwsCloudformationStack('element', 'Cloudformation Stack', 'an optional tech field')
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

' loads the AwsCloudformationStack card
include('elements/aws/ManagementGovernance/AwsCloudformationStack')
AwsCloudformationStackCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsCloudformationStack card
include('elements/aws/ManagementGovernance/AwsCloudformationStack')
AwsCloudformationStackCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
