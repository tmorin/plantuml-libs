# AwsEc2Rescue
```text
elements/aws/Compute/AwsEc2Rescue
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsEc2Rescue icon](../../../icons/aws/Compute/AwsEc2Rescue.png) | ![AwsEc2Rescue element](AwsEc2Rescue.element.png) | ![AwsEc2Rescue card](AwsEc2Rescue.card.png) |
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

' loads the AwsEc2Rescue element
include('elements/aws/Compute/AwsEc2Rescue')
AwsEc2Rescue('element', 'Ec2 Rescue', 'an optional tech field')
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

' loads the AwsEc2Rescue element
include('elements/aws/Compute/AwsEc2Rescue')
AwsEc2Rescue('element', 'Ec2 Rescue', 'an optional tech field')
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

' loads the AwsEc2Rescue card
include('elements/aws/Compute/AwsEc2Rescue')
AwsEc2RescueCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsEc2Rescue card
include('elements/aws/Compute/AwsEc2Rescue')
AwsEc2RescueCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
