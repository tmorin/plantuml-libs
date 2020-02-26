# AwsSystemsManagerMaintenanceWindows
```text
elements/aws/ManagementGovernance/AwsSystemsManagerMaintenanceWindows
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsSystemsManagerMaintenanceWindows icon](../../../icons/aws/ManagementGovernance/AwsSystemsManagerMaintenanceWindows.png) | ![AwsSystemsManagerMaintenanceWindows element](AwsSystemsManagerMaintenanceWindows.element.png) | ![AwsSystemsManagerMaintenanceWindows card](AwsSystemsManagerMaintenanceWindows.card.png) |
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

' loads the AwsSystemsManagerMaintenanceWindows element
include('elements/aws/ManagementGovernance/AwsSystemsManagerMaintenanceWindows')
AwsSystemsManagerMaintenanceWindows('element', 'Systems Manager Maintenance Windows', 'an optional tech field')
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

' loads the AwsSystemsManagerMaintenanceWindows element
include('elements/aws/ManagementGovernance/AwsSystemsManagerMaintenanceWindows')
AwsSystemsManagerMaintenanceWindows('element', 'Systems Manager Maintenance Windows', 'an optional tech field')
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

' loads the AwsSystemsManagerMaintenanceWindows card
include('elements/aws/ManagementGovernance/AwsSystemsManagerMaintenanceWindows')
AwsSystemsManagerMaintenanceWindowsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsSystemsManagerMaintenanceWindows card
include('elements/aws/ManagementGovernance/AwsSystemsManagerMaintenanceWindows')
AwsSystemsManagerMaintenanceWindowsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
