# AwsSystemsManager
```text
elements/aws/ManagementGovernance/AwsSystemsManager
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsSystemsManager icon](../../../icons/aws/ManagementGovernance/AwsSystemsManager.png) | ![AwsSystemsManager element](AwsSystemsManager.element.png) | ![AwsSystemsManager card](AwsSystemsManager.card.png) |
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

' loads the AwsSystemsManager element
include('elements/aws/ManagementGovernance/AwsSystemsManager')
AwsSystemsManager('element', 'Systems Manager', 'an optional tech field')
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

' loads the AwsSystemsManager element
include('elements/aws/ManagementGovernance/AwsSystemsManager')
AwsSystemsManager('element', 'Systems Manager', 'an optional tech field')
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

' loads the AwsSystemsManager card
include('elements/aws/ManagementGovernance/AwsSystemsManager')
AwsSystemsManagerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsSystemsManager card
include('elements/aws/ManagementGovernance/AwsSystemsManager')
AwsSystemsManagerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
