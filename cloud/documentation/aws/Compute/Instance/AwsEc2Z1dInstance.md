# AwsEc2Z1dInstance
```text
elements/aws/Compute/Instance/AwsEc2Z1dInstance
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsEc2Z1dInstance icon](../../../../icons/aws/Compute/Instance/AwsEc2Z1dInstance.png) | ![AwsEc2Z1dInstance element](AwsEc2Z1dInstance.element.png) | ![AwsEc2Z1dInstance card](AwsEc2Z1dInstance.card.png) |
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

' loads the AwsEc2Z1dInstance element
include('elements/aws/Compute/Instance/AwsEc2Z1dInstance')
AwsEc2Z1dInstance('element', 'Ec2 Z1d Instance', 'an optional tech field')
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

' loads the AwsEc2Z1dInstance element
include('elements/aws/Compute/Instance/AwsEc2Z1dInstance')
AwsEc2Z1dInstance('element', 'Ec2 Z1d Instance', 'an optional tech field')
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

' loads the AwsEc2Z1dInstance card
include('elements/aws/Compute/Instance/AwsEc2Z1dInstance')
AwsEc2Z1dInstanceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsEc2Z1dInstance card
include('elements/aws/Compute/Instance/AwsEc2Z1dInstance')
AwsEc2Z1dInstanceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
