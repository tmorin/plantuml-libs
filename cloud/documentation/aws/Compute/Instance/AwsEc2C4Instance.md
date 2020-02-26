# AwsEc2C4Instance
```text
elements/aws/Compute/Instance/AwsEc2C4Instance
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsEc2C4Instance icon](../../../../icons/aws/Compute/Instance/AwsEc2C4Instance.png) | ![AwsEc2C4Instance element](AwsEc2C4Instance.element.png) | ![AwsEc2C4Instance card](AwsEc2C4Instance.card.png) |
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

' loads the AwsEc2C4Instance element
include('elements/aws/Compute/Instance/AwsEc2C4Instance')
AwsEc2C4Instance('element', 'Ec2 C4 Instance', 'an optional tech field')
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

' loads the AwsEc2C4Instance element
include('elements/aws/Compute/Instance/AwsEc2C4Instance')
AwsEc2C4Instance('element', 'Ec2 C4 Instance', 'an optional tech field')
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

' loads the AwsEc2C4Instance card
include('elements/aws/Compute/Instance/AwsEc2C4Instance')
AwsEc2C4InstanceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsEc2C4Instance card
include('elements/aws/Compute/Instance/AwsEc2C4Instance')
AwsEc2C4InstanceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
