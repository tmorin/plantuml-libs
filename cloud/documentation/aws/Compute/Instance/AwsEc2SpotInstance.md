# AwsEc2SpotInstance
```text
elements/aws/Compute/Instance/AwsEc2SpotInstance
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsEc2SpotInstance icon](../../../../icons/aws/Compute/Instance/AwsEc2SpotInstance.png) | ![AwsEc2SpotInstance element](AwsEc2SpotInstance.element.png) | ![AwsEc2SpotInstance card](AwsEc2SpotInstance.card.png) |
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

' loads the AwsEc2SpotInstance element
include('elements/aws/Compute/Instance/AwsEc2SpotInstance')
AwsEc2SpotInstance('element', 'Ec2 Spot Instance', 'an optional tech field')
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

' loads the AwsEc2SpotInstance element
include('elements/aws/Compute/Instance/AwsEc2SpotInstance')
AwsEc2SpotInstance('element', 'Ec2 Spot Instance', 'an optional tech field')
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

' loads the AwsEc2SpotInstance card
include('elements/aws/Compute/Instance/AwsEc2SpotInstance')
AwsEc2SpotInstanceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsEc2SpotInstance card
include('elements/aws/Compute/Instance/AwsEc2SpotInstance')
AwsEc2SpotInstanceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
