# AwsEc2T3InstanceCopy
```text
elements/aws/Compute/Instance/AwsEc2T3InstanceCopy
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsEc2T3InstanceCopy icon](../../../../icons/aws/Compute/Instance/AwsEc2T3InstanceCopy.png) | ![AwsEc2T3InstanceCopy element](AwsEc2T3InstanceCopy.element.png) | ![AwsEc2T3InstanceCopy card](AwsEc2T3InstanceCopy.card.png) |
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

' loads the AwsEc2T3InstanceCopy element
include('elements/aws/Compute/Instance/AwsEc2T3InstanceCopy')
AwsEc2T3InstanceCopy('element', 'Ec2 T3 Instance Copy', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../../../"

' loads the library
!include ../../../../library.puml

' loads the style
include('styles/aws')

' loads the AwsEc2T3InstanceCopy element
include('elements/aws/Compute/Instance/AwsEc2T3InstanceCopy')
AwsEc2T3InstanceCopy('element', 'Ec2 T3 Instance Copy', 'an optional tech field')
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

' loads the AwsEc2T3InstanceCopy card
include('elements/aws/Compute/Instance/AwsEc2T3InstanceCopy')
AwsEc2T3InstanceCopyCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../../../"

' loads the library
!include ../../../../library.puml

' loads the style
include('styles/aws')

' loads the AwsEc2T3InstanceCopy card
include('elements/aws/Compute/Instance/AwsEc2T3InstanceCopy')
AwsEc2T3InstanceCopyCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
