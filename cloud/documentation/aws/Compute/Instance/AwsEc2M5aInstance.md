# AwsEc2M5aInstance
```text
elements/aws/Compute/Instance/AwsEc2M5aInstance
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsEc2M5aInstance icon](../../../../icons/aws/Compute/Instance/AwsEc2M5aInstance.png) | ![AwsEc2M5aInstance element](AwsEc2M5aInstance.element.png) | ![AwsEc2M5aInstance card](AwsEc2M5aInstance.card.png) |
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

' loads the AwsEc2M5aInstance element
include('elements/aws/Compute/Instance/AwsEc2M5aInstance')
AwsEc2M5aInstance('element', 'Ec2 M5a Instance', 'an optional tech field')
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

' loads the AwsEc2M5aInstance element
include('elements/aws/Compute/Instance/AwsEc2M5aInstance')
AwsEc2M5aInstance('element', 'Ec2 M5a Instance', 'an optional tech field')
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

' loads the AwsEc2M5aInstance card
include('elements/aws/Compute/Instance/AwsEc2M5aInstance')
AwsEc2M5aInstanceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsEc2M5aInstance card
include('elements/aws/Compute/Instance/AwsEc2M5aInstance')
AwsEc2M5aInstanceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
