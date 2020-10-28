# AwsOpsworksApps
```text
elements/aws/ManagementGovernance/AwsOpsworksApps
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsOpsworksApps icon](../../../icons/aws/ManagementGovernance/AwsOpsworksApps.png) | ![AwsOpsworksApps element](AwsOpsworksApps.element.png) | ![AwsOpsworksApps card](AwsOpsworksApps.card.png) |
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

' loads the AwsOpsworksApps element
include('elements/aws/ManagementGovernance/AwsOpsworksApps')
AwsOpsworksApps('element', 'Opsworks Apps', 'an optional tech field')
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

' loads the AwsOpsworksApps element
include('elements/aws/ManagementGovernance/AwsOpsworksApps')
AwsOpsworksApps('element', 'Opsworks Apps', 'an optional tech field')
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

' loads the AwsOpsworksApps card
include('elements/aws/ManagementGovernance/AwsOpsworksApps')
AwsOpsworksAppsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsOpsworksApps card
include('elements/aws/ManagementGovernance/AwsOpsworksApps')
AwsOpsworksAppsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
