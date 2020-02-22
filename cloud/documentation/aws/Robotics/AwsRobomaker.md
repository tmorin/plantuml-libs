# AwsRobomaker
```text
elements/aws/Robotics/AwsRobomaker
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsRobomaker icon](../../../icons/aws/Robotics/AwsRobomaker.png) | ![AwsRobomaker element](AwsRobomaker.element.png) | ![AwsRobomaker card](AwsRobomaker.card.png) |
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

' loads the AwsRobomaker element
include('elements/aws/Robotics/AwsRobomaker')
AwsRobomaker('element', 'Robomaker', 'an optional tech field')
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

' loads the AwsRobomaker element
include('elements/aws/Robotics/AwsRobomaker')
AwsRobomaker('element', 'Robomaker', 'an optional tech field')
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

' loads the AwsRobomaker card
include('elements/aws/Robotics/AwsRobomaker')
AwsRobomakerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsRobomaker card
include('elements/aws/Robotics/AwsRobomaker')
AwsRobomakerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
