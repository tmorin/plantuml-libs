# AwsIdentityAndAccessManagementIamStsAlternate
```text
elements/aws/SecurityIdentityCompliance/AwsIdentityAndAccessManagementIamStsAlternate
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsIdentityAndAccessManagementIamStsAlternate icon](../../../icons/aws/SecurityIdentityCompliance/AwsIdentityAndAccessManagementIamStsAlternate.png) | ![AwsIdentityAndAccessManagementIamStsAlternate element](AwsIdentityAndAccessManagementIamStsAlternate.element.png) | ![AwsIdentityAndAccessManagementIamStsAlternate card](AwsIdentityAndAccessManagementIamStsAlternate.card.png) |
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

' loads the AwsIdentityAndAccessManagementIamStsAlternate element
include('elements/aws/SecurityIdentityCompliance/AwsIdentityAndAccessManagementIamStsAlternate')
AwsIdentityAndAccessManagementIamStsAlternate('element', 'Identity And Access Management Iam Sts Alternate', 'an optional tech field')
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

' loads the AwsIdentityAndAccessManagementIamStsAlternate element
include('elements/aws/SecurityIdentityCompliance/AwsIdentityAndAccessManagementIamStsAlternate')
AwsIdentityAndAccessManagementIamStsAlternate('element', 'Identity And Access Management Iam Sts Alternate', 'an optional tech field')
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

' loads the AwsIdentityAndAccessManagementIamStsAlternate card
include('elements/aws/SecurityIdentityCompliance/AwsIdentityAndAccessManagementIamStsAlternate')
AwsIdentityAndAccessManagementIamStsAlternateCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsIdentityAndAccessManagementIamStsAlternate card
include('elements/aws/SecurityIdentityCompliance/AwsIdentityAndAccessManagementIamStsAlternate')
AwsIdentityAndAccessManagementIamStsAlternateCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
