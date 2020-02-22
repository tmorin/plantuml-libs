# AwsRobomakerDevelopmentEnvironment
```text
elements/aws/Robotics/AwsRobomakerDevelopmentEnvironment
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsRobomakerDevelopmentEnvironment icon](../../../icons/aws/Robotics/AwsRobomakerDevelopmentEnvironment.png) | ![AwsRobomakerDevelopmentEnvironment element](AwsRobomakerDevelopmentEnvironment.element.png) | ![AwsRobomakerDevelopmentEnvironment card](AwsRobomakerDevelopmentEnvironment.card.png) |
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

' loads the AwsRobomakerDevelopmentEnvironment element
include('elements/aws/Robotics/AwsRobomakerDevelopmentEnvironment')
AwsRobomakerDevelopmentEnvironment('element', 'Robomaker Development Environment', 'an optional tech field')
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

' loads the AwsRobomakerDevelopmentEnvironment element
include('elements/aws/Robotics/AwsRobomakerDevelopmentEnvironment')
AwsRobomakerDevelopmentEnvironment('element', 'Robomaker Development Environment', 'an optional tech field')
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

' loads the AwsRobomakerDevelopmentEnvironment card
include('elements/aws/Robotics/AwsRobomakerDevelopmentEnvironment')
AwsRobomakerDevelopmentEnvironmentCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsRobomakerDevelopmentEnvironment card
include('elements/aws/Robotics/AwsRobomakerDevelopmentEnvironment')
AwsRobomakerDevelopmentEnvironmentCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
