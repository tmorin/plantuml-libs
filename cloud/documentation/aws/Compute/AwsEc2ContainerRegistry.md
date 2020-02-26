# AwsEc2ContainerRegistry
```text
elements/aws/Compute/AwsEc2ContainerRegistry
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsEc2ContainerRegistry icon](../../../icons/aws/Compute/AwsEc2ContainerRegistry.png) | ![AwsEc2ContainerRegistry element](AwsEc2ContainerRegistry.element.png) | ![AwsEc2ContainerRegistry card](AwsEc2ContainerRegistry.card.png) |
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

' loads the AwsEc2ContainerRegistry element
include('elements/aws/Compute/AwsEc2ContainerRegistry')
AwsEc2ContainerRegistry('element', 'Ec2 Container Registry', 'an optional tech field')
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

' loads the AwsEc2ContainerRegistry element
include('elements/aws/Compute/AwsEc2ContainerRegistry')
AwsEc2ContainerRegistry('element', 'Ec2 Container Registry', 'an optional tech field')
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

' loads the AwsEc2ContainerRegistry card
include('elements/aws/Compute/AwsEc2ContainerRegistry')
AwsEc2ContainerRegistryCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsEc2ContainerRegistry card
include('elements/aws/Compute/AwsEc2ContainerRegistry')
AwsEc2ContainerRegistryCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
