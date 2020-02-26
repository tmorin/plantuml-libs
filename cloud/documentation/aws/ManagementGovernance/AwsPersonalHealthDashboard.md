# AwsPersonalHealthDashboard
```text
elements/aws/ManagementGovernance/AwsPersonalHealthDashboard
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsPersonalHealthDashboard icon](../../../icons/aws/ManagementGovernance/AwsPersonalHealthDashboard.png) | ![AwsPersonalHealthDashboard element](AwsPersonalHealthDashboard.element.png) | ![AwsPersonalHealthDashboard card](AwsPersonalHealthDashboard.card.png) |
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

' loads the AwsPersonalHealthDashboard element
include('elements/aws/ManagementGovernance/AwsPersonalHealthDashboard')
AwsPersonalHealthDashboard('element', 'Personal Health Dashboard', 'an optional tech field')
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

' loads the AwsPersonalHealthDashboard element
include('elements/aws/ManagementGovernance/AwsPersonalHealthDashboard')
AwsPersonalHealthDashboard('element', 'Personal Health Dashboard', 'an optional tech field')
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

' loads the AwsPersonalHealthDashboard card
include('elements/aws/ManagementGovernance/AwsPersonalHealthDashboard')
AwsPersonalHealthDashboardCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsPersonalHealthDashboard card
include('elements/aws/ManagementGovernance/AwsPersonalHealthDashboard')
AwsPersonalHealthDashboardCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
