# AwsEc2AutoScaling
```text
elements/aws/Compute/AwsEc2AutoScaling
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsEc2AutoScaling icon](../../../icons/aws/Compute/AwsEc2AutoScaling.png) | ![AwsEc2AutoScaling element](AwsEc2AutoScaling.element.png) | ![AwsEc2AutoScaling card](AwsEc2AutoScaling.card.png) |
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

' loads the AwsEc2AutoScaling element
include('elements/aws/Compute/AwsEc2AutoScaling')
AwsEc2AutoScaling('element', 'Ec2 Auto Scaling', 'an optional tech field')
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

' loads the AwsEc2AutoScaling element
include('elements/aws/Compute/AwsEc2AutoScaling')
AwsEc2AutoScaling('element', 'Ec2 Auto Scaling', 'an optional tech field')
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

' loads the AwsEc2AutoScaling card
include('elements/aws/Compute/AwsEc2AutoScaling')
AwsEc2AutoScalingCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsEc2AutoScaling card
include('elements/aws/Compute/AwsEc2AutoScaling')
AwsEc2AutoScalingCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
