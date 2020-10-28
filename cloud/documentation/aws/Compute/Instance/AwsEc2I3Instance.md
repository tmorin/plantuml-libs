# AwsEc2I3Instance
```text
elements/aws/Compute/Instance/AwsEc2I3Instance
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsEc2I3Instance icon](../../../../icons/aws/Compute/Instance/AwsEc2I3Instance.png) | ![AwsEc2I3Instance element](AwsEc2I3Instance.element.png) | ![AwsEc2I3Instance card](AwsEc2I3Instance.card.png) |
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

' loads the AwsEc2I3Instance element
include('elements/aws/Compute/Instance/AwsEc2I3Instance')
AwsEc2I3Instance('element', 'Ec2 I3 Instance', 'an optional tech field')
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

' loads the AwsEc2I3Instance element
include('elements/aws/Compute/Instance/AwsEc2I3Instance')
AwsEc2I3Instance('element', 'Ec2 I3 Instance', 'an optional tech field')
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

' loads the AwsEc2I3Instance card
include('elements/aws/Compute/Instance/AwsEc2I3Instance')
AwsEc2I3InstanceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsEc2I3Instance card
include('elements/aws/Compute/Instance/AwsEc2I3Instance')
AwsEc2I3InstanceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
