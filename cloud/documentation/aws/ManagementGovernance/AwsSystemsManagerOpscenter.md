# AwsSystemsManagerOpscenter
```text
elements/aws/ManagementGovernance/AwsSystemsManagerOpscenter
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsSystemsManagerOpscenter icon](../../../icons/aws/ManagementGovernance/AwsSystemsManagerOpscenter.png) | ![AwsSystemsManagerOpscenter element](AwsSystemsManagerOpscenter.element.png) | ![AwsSystemsManagerOpscenter card](AwsSystemsManagerOpscenter.card.png) |
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

' loads the AwsSystemsManagerOpscenter element
include('elements/aws/ManagementGovernance/AwsSystemsManagerOpscenter')
AwsSystemsManagerOpscenter('element', 'Systems Manager Opscenter', 'an optional tech field')
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

' loads the AwsSystemsManagerOpscenter element
include('elements/aws/ManagementGovernance/AwsSystemsManagerOpscenter')
AwsSystemsManagerOpscenter('element', 'Systems Manager Opscenter', 'an optional tech field')
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

' loads the AwsSystemsManagerOpscenter card
include('elements/aws/ManagementGovernance/AwsSystemsManagerOpscenter')
AwsSystemsManagerOpscenterCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsSystemsManagerOpscenter card
include('elements/aws/ManagementGovernance/AwsSystemsManagerOpscenter')
AwsSystemsManagerOpscenterCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
