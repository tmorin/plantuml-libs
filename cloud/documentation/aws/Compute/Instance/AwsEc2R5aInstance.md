# AwsEc2R5aInstance
```text
elements/aws/Compute/Instance/AwsEc2R5aInstance
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsEc2R5aInstance icon](../../../../icons/aws/Compute/Instance/AwsEc2R5aInstance.png) | ![AwsEc2R5aInstance element](AwsEc2R5aInstance.element.png) | ![AwsEc2R5aInstance card](AwsEc2R5aInstance.card.png) |
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

' loads the AwsEc2R5aInstance element
include('elements/aws/Compute/Instance/AwsEc2R5aInstance')
AwsEc2R5aInstance('element', 'Ec2 R5a Instance', 'an optional tech field')
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

' loads the AwsEc2R5aInstance element
include('elements/aws/Compute/Instance/AwsEc2R5aInstance')
AwsEc2R5aInstance('element', 'Ec2 R5a Instance', 'an optional tech field')
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

' loads the AwsEc2R5aInstance card
include('elements/aws/Compute/Instance/AwsEc2R5aInstance')
AwsEc2R5aInstanceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsEc2R5aInstance card
include('elements/aws/Compute/Instance/AwsEc2R5aInstance')
AwsEc2R5aInstanceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
