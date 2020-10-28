# AwsRobomakerFleetManagement
```text
elements/aws/Robotics/AwsRobomakerFleetManagement
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsRobomakerFleetManagement icon](../../../icons/aws/Robotics/AwsRobomakerFleetManagement.png) | ![AwsRobomakerFleetManagement element](AwsRobomakerFleetManagement.element.png) | ![AwsRobomakerFleetManagement card](AwsRobomakerFleetManagement.card.png) |
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

' loads the AwsRobomakerFleetManagement element
include('elements/aws/Robotics/AwsRobomakerFleetManagement')
AwsRobomakerFleetManagement('element', 'Robomaker Fleet Management', 'an optional tech field')
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

' loads the AwsRobomakerFleetManagement element
include('elements/aws/Robotics/AwsRobomakerFleetManagement')
AwsRobomakerFleetManagement('element', 'Robomaker Fleet Management', 'an optional tech field')
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

' loads the AwsRobomakerFleetManagement card
include('elements/aws/Robotics/AwsRobomakerFleetManagement')
AwsRobomakerFleetManagementCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsRobomakerFleetManagement card
include('elements/aws/Robotics/AwsRobomakerFleetManagement')
AwsRobomakerFleetManagementCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
