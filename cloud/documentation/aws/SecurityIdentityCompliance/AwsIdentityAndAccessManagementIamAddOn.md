# AwsIdentityAndAccessManagementIamAddOn
```text
elements/aws/SecurityIdentityCompliance/AwsIdentityAndAccessManagementIamAddOn
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsIdentityAndAccessManagementIamAddOn icon](../../../icons/aws/SecurityIdentityCompliance/AwsIdentityAndAccessManagementIamAddOn.png) | ![AwsIdentityAndAccessManagementIamAddOn element](AwsIdentityAndAccessManagementIamAddOn.element.png) | ![AwsIdentityAndAccessManagementIamAddOn card](AwsIdentityAndAccessManagementIamAddOn.card.png) |
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

' loads the AwsIdentityAndAccessManagementIamAddOn element
include('elements/aws/SecurityIdentityCompliance/AwsIdentityAndAccessManagementIamAddOn')
AwsIdentityAndAccessManagementIamAddOn('element', 'Identity And Access Management Iam Add On', 'an optional tech field')
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

' loads the AwsIdentityAndAccessManagementIamAddOn element
include('elements/aws/SecurityIdentityCompliance/AwsIdentityAndAccessManagementIamAddOn')
AwsIdentityAndAccessManagementIamAddOn('element', 'Identity And Access Management Iam Add On', 'an optional tech field')
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

' loads the AwsIdentityAndAccessManagementIamAddOn card
include('elements/aws/SecurityIdentityCompliance/AwsIdentityAndAccessManagementIamAddOn')
AwsIdentityAndAccessManagementIamAddOnCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsIdentityAndAccessManagementIamAddOn card
include('elements/aws/SecurityIdentityCompliance/AwsIdentityAndAccessManagementIamAddOn')
AwsIdentityAndAccessManagementIamAddOnCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
