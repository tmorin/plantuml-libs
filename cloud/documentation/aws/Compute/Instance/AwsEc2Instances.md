# AwsEc2Instances
```text
elements/aws/Compute/Instance/AwsEc2Instances
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsEc2Instances icon](../../../../icons/aws/Compute/Instance/AwsEc2Instances.png) | ![AwsEc2Instances element](AwsEc2Instances.element.png) | ![AwsEc2Instances card](AwsEc2Instances.card.png) |
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

' loads the AwsEc2Instances element
include('elements/aws/Compute/Instance/AwsEc2Instances')
AwsEc2Instances('element', 'Ec2 Instances', 'an optional tech field')
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

' loads the AwsEc2Instances element
include('elements/aws/Compute/Instance/AwsEc2Instances')
AwsEc2Instances('element', 'Ec2 Instances', 'an optional tech field')
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

' loads the AwsEc2Instances card
include('elements/aws/Compute/Instance/AwsEc2Instances')
AwsEc2InstancesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsEc2Instances card
include('elements/aws/Compute/Instance/AwsEc2Instances')
AwsEc2InstancesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
