# AwsOpsworks
```text
elements/aws/ManagementGovernance/AwsOpsworks
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsOpsworks icon](../../../icons/aws/ManagementGovernance/AwsOpsworks.png) | ![AwsOpsworks element](AwsOpsworks.element.png) | ![AwsOpsworks card](AwsOpsworks.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="v1.x"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/aws')

' loads the AwsOpsworks element
include('elements/aws/ManagementGovernance/AwsOpsworks')
AwsOpsworks('element', 'Opsworks', 'an optional tech field')
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

' loads the AwsOpsworks element
include('elements/aws/ManagementGovernance/AwsOpsworks')
AwsOpsworks('element', 'Opsworks', 'an optional tech field')
@enduml
```
## Card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="v1.x"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/aws')

' loads the AwsOpsworks card
include('elements/aws/ManagementGovernance/AwsOpsworks')
AwsOpsworksCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsOpsworks card
include('elements/aws/ManagementGovernance/AwsOpsworks')
AwsOpsworksCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
