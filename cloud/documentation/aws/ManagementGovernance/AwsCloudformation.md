# AwsCloudformation
```text
elements/aws/ManagementGovernance/AwsCloudformation
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsCloudformation icon](../../../icons/aws/ManagementGovernance/AwsCloudformation.png) | ![AwsCloudformation element](AwsCloudformation.element.png) | ![AwsCloudformation card](AwsCloudformation.card.png) |
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

' loads the AwsCloudformation element
include('elements/aws/ManagementGovernance/AwsCloudformation')
AwsCloudformation('element', 'Cloudformation', 'an optional tech field')
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

' loads the AwsCloudformation element
include('elements/aws/ManagementGovernance/AwsCloudformation')
AwsCloudformation('element', 'Cloudformation', 'an optional tech field')
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

' loads the AwsCloudformation card
include('elements/aws/ManagementGovernance/AwsCloudformation')
AwsCloudformationCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsCloudformation card
include('elements/aws/ManagementGovernance/AwsCloudformation')
AwsCloudformationCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
