# AwsEc2Instance
```text
elements/aws/Compute/Instance/AwsEc2Instance
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsEc2Instance icon](../../../../icons/aws/Compute/Instance/AwsEc2Instance.png) | ![AwsEc2Instance element](AwsEc2Instance.element.png) | ![AwsEc2Instance card](AwsEc2Instance.card.png) |
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

' loads the AwsEc2Instance element
include('elements/aws/Compute/Instance/AwsEc2Instance')
AwsEc2Instance('element', 'Ec2 Instance', 'an optional tech field')
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

' loads the AwsEc2Instance element
include('elements/aws/Compute/Instance/AwsEc2Instance')
AwsEc2Instance('element', 'Ec2 Instance', 'an optional tech field')
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

' loads the AwsEc2Instance card
include('elements/aws/Compute/Instance/AwsEc2Instance')
AwsEc2InstanceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsEc2Instance card
include('elements/aws/Compute/Instance/AwsEc2Instance')
AwsEc2InstanceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
