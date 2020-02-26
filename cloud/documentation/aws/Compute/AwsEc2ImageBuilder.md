# AwsEc2ImageBuilder
```text
elements/aws/Compute/AwsEc2ImageBuilder
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsEc2ImageBuilder icon](../../../icons/aws/Compute/AwsEc2ImageBuilder.png) | ![AwsEc2ImageBuilder element](AwsEc2ImageBuilder.element.png) | ![AwsEc2ImageBuilder card](AwsEc2ImageBuilder.card.png) |
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

' loads the AwsEc2ImageBuilder element
include('elements/aws/Compute/AwsEc2ImageBuilder')
AwsEc2ImageBuilder('element', 'Ec2 Image Builder', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../../"

' loads the library
!include ../../../library.puml

' loads the style
include('styles/aws')

' loads the AwsEc2ImageBuilder element
include('elements/aws/Compute/AwsEc2ImageBuilder')
AwsEc2ImageBuilder('element', 'Ec2 Image Builder', 'an optional tech field')
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

' loads the AwsEc2ImageBuilder card
include('elements/aws/Compute/AwsEc2ImageBuilder')
AwsEc2ImageBuilderCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../../"

' loads the library
!include ../../../library.puml

' loads the style
include('styles/aws')

' loads the AwsEc2ImageBuilder card
include('elements/aws/Compute/AwsEc2ImageBuilder')
AwsEc2ImageBuilderCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
