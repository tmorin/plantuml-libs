# AwsEc2R5Instance
```text
elements/aws/Compute/Instance/AwsEc2R5Instance
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsEc2R5Instance icon](../../../../icons/aws/Compute/Instance/AwsEc2R5Instance.png) | ![AwsEc2R5Instance element](AwsEc2R5Instance.element.png) | ![AwsEc2R5Instance card](AwsEc2R5Instance.card.png) |
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

' loads the AwsEc2R5Instance element
include('elements/aws/Compute/Instance/AwsEc2R5Instance')
AwsEc2R5Instance('element', 'Ec2 R5 Instance', 'an optional tech field')
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

' loads the AWS style
include('styles/aws')

' loads the AwsEc2R5Instance element
include('elements/aws/Compute/Instance/AwsEc2R5Instance')
AwsEc2R5Instance('element', 'Ec2 R5 Instance', 'an optional tech field')
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

' loads the AwsEc2R5Instance card
include('elements/aws/Compute/Instance/AwsEc2R5Instance')
AwsEc2R5InstanceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GCP style
include('styles/gcp')

' loads the AwsEc2R5Instance card
include('elements/aws/Compute/Instance/AwsEc2R5Instance')
AwsEc2R5InstanceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
