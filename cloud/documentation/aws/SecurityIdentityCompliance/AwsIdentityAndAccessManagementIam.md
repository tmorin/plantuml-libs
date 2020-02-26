# AwsIdentityAndAccessManagementIam
```text
elements/aws/SecurityIdentityCompliance/AwsIdentityAndAccessManagementIam
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsIdentityAndAccessManagementIam icon](../../../icons/aws/SecurityIdentityCompliance/AwsIdentityAndAccessManagementIam.png) | ![AwsIdentityAndAccessManagementIam element](AwsIdentityAndAccessManagementIam.element.png) | ![AwsIdentityAndAccessManagementIam card](AwsIdentityAndAccessManagementIam.card.png) |
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

' loads the AwsIdentityAndAccessManagementIam element
include('elements/aws/SecurityIdentityCompliance/AwsIdentityAndAccessManagementIam')
AwsIdentityAndAccessManagementIam('element', 'Identity And Access Management Iam', 'an optional tech field')
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

' loads the AwsIdentityAndAccessManagementIam element
include('elements/aws/SecurityIdentityCompliance/AwsIdentityAndAccessManagementIam')
AwsIdentityAndAccessManagementIam('element', 'Identity And Access Management Iam', 'an optional tech field')
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

' loads the AwsIdentityAndAccessManagementIam card
include('elements/aws/SecurityIdentityCompliance/AwsIdentityAndAccessManagementIam')
AwsIdentityAndAccessManagementIamCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsIdentityAndAccessManagementIam card
include('elements/aws/SecurityIdentityCompliance/AwsIdentityAndAccessManagementIam')
AwsIdentityAndAccessManagementIamCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
