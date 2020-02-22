# AwsOrganizationsOrganizationalUnit
```text
elements/aws/ManagementGovernance/AwsOrganizationsOrganizationalUnit
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsOrganizationsOrganizationalUnit icon](../../../icons/aws/ManagementGovernance/AwsOrganizationsOrganizationalUnit.png) | ![AwsOrganizationsOrganizationalUnit element](AwsOrganizationsOrganizationalUnit.element.png) | ![AwsOrganizationsOrganizationalUnit card](AwsOrganizationsOrganizationalUnit.card.png) |
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

' loads the AwsOrganizationsOrganizationalUnit element
include('elements/aws/ManagementGovernance/AwsOrganizationsOrganizationalUnit')
AwsOrganizationsOrganizationalUnit('element', 'Organizations Organizational Unit', 'an optional tech field')
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

' loads the AwsOrganizationsOrganizationalUnit element
include('elements/aws/ManagementGovernance/AwsOrganizationsOrganizationalUnit')
AwsOrganizationsOrganizationalUnit('element', 'Organizations Organizational Unit', 'an optional tech field')
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

' loads the AwsOrganizationsOrganizationalUnit card
include('elements/aws/ManagementGovernance/AwsOrganizationsOrganizationalUnit')
AwsOrganizationsOrganizationalUnitCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsOrganizationsOrganizationalUnit card
include('elements/aws/ManagementGovernance/AwsOrganizationsOrganizationalUnit')
AwsOrganizationsOrganizationalUnitCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
