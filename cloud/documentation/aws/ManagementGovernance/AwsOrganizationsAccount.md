# AwsOrganizationsAccount
```text
elements/aws/ManagementGovernance/AwsOrganizationsAccount
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsOrganizationsAccount icon](../../../icons/aws/ManagementGovernance/AwsOrganizationsAccount.png) | ![AwsOrganizationsAccount element](AwsOrganizationsAccount.element.png) | ![AwsOrganizationsAccount card](AwsOrganizationsAccount.card.png) |
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

' loads the AwsOrganizationsAccount element
include('elements/aws/ManagementGovernance/AwsOrganizationsAccount')
AwsOrganizationsAccount('element', 'Organizations Account', 'an optional tech field')
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

' loads the AwsOrganizationsAccount element
include('elements/aws/ManagementGovernance/AwsOrganizationsAccount')
AwsOrganizationsAccount('element', 'Organizations Account', 'an optional tech field')
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

' loads the AwsOrganizationsAccount card
include('elements/aws/ManagementGovernance/AwsOrganizationsAccount')
AwsOrganizationsAccountCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsOrganizationsAccount card
include('elements/aws/ManagementGovernance/AwsOrganizationsAccount')
AwsOrganizationsAccountCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
