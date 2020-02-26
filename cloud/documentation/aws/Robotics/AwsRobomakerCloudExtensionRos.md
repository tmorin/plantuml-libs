# AwsRobomakerCloudExtensionRos
```text
elements/aws/Robotics/AwsRobomakerCloudExtensionRos
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsRobomakerCloudExtensionRos icon](../../../icons/aws/Robotics/AwsRobomakerCloudExtensionRos.png) | ![AwsRobomakerCloudExtensionRos element](AwsRobomakerCloudExtensionRos.element.png) | ![AwsRobomakerCloudExtensionRos card](AwsRobomakerCloudExtensionRos.card.png) |
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

' loads the AwsRobomakerCloudExtensionRos element
include('elements/aws/Robotics/AwsRobomakerCloudExtensionRos')
AwsRobomakerCloudExtensionRos('element', 'Robomaker Cloud Extension Ros', 'an optional tech field')
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

' loads the AwsRobomakerCloudExtensionRos element
include('elements/aws/Robotics/AwsRobomakerCloudExtensionRos')
AwsRobomakerCloudExtensionRos('element', 'Robomaker Cloud Extension Ros', 'an optional tech field')
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

' loads the AwsRobomakerCloudExtensionRos card
include('elements/aws/Robotics/AwsRobomakerCloudExtensionRos')
AwsRobomakerCloudExtensionRosCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsRobomakerCloudExtensionRos card
include('elements/aws/Robotics/AwsRobomakerCloudExtensionRos')
AwsRobomakerCloudExtensionRosCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
