# AwsEc2ContainerRegistryImage
```text
elements/aws/Compute/AwsEc2ContainerRegistryImage
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsEc2ContainerRegistryImage icon](../../../icons/aws/Compute/AwsEc2ContainerRegistryImage.png) | ![AwsEc2ContainerRegistryImage element](AwsEc2ContainerRegistryImage.element.png) | ![AwsEc2ContainerRegistryImage card](AwsEc2ContainerRegistryImage.card.png) |
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

' loads the AwsEc2ContainerRegistryImage element
include('elements/aws/Compute/AwsEc2ContainerRegistryImage')
AwsEc2ContainerRegistryImage('element', 'Ec2 Container Registry Image', 'an optional tech field')
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

' loads the AwsEc2ContainerRegistryImage element
include('elements/aws/Compute/AwsEc2ContainerRegistryImage')
AwsEc2ContainerRegistryImage('element', 'Ec2 Container Registry Image', 'an optional tech field')
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

' loads the AwsEc2ContainerRegistryImage card
include('elements/aws/Compute/AwsEc2ContainerRegistryImage')
AwsEc2ContainerRegistryImageCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsEc2ContainerRegistryImage card
include('elements/aws/Compute/AwsEc2ContainerRegistryImage')
AwsEc2ContainerRegistryImageCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
