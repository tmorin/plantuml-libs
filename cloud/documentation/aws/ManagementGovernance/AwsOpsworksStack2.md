# AwsOpsworksStack2
```text
elements/aws/ManagementGovernance/AwsOpsworksStack2
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsOpsworksStack2 icon](../../../icons/aws/ManagementGovernance/AwsOpsworksStack2.png) | ![AwsOpsworksStack2 element](AwsOpsworksStack2.element.png) | ![AwsOpsworksStack2 card](AwsOpsworksStack2.card.png) |
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

' loads the AwsOpsworksStack2 element
include('elements/aws/ManagementGovernance/AwsOpsworksStack2')
AwsOpsworksStack2('element', 'Opsworks Stack2', 'an optional tech field')
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

' loads the AwsOpsworksStack2 element
include('elements/aws/ManagementGovernance/AwsOpsworksStack2')
AwsOpsworksStack2('element', 'Opsworks Stack2', 'an optional tech field')
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

' loads the AwsOpsworksStack2 card
include('elements/aws/ManagementGovernance/AwsOpsworksStack2')
AwsOpsworksStack2Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsOpsworksStack2 card
include('elements/aws/ManagementGovernance/AwsOpsworksStack2')
AwsOpsworksStack2Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
