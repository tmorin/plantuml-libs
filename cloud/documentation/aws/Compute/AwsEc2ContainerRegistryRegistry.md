# AwsEc2ContainerRegistryRegistry
```text
elements/aws/Compute/AwsEc2ContainerRegistryRegistry
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsEc2ContainerRegistryRegistry icon](../../../icons/aws/Compute/AwsEc2ContainerRegistryRegistry.png) | ![AwsEc2ContainerRegistryRegistry element](AwsEc2ContainerRegistryRegistry.element.png) | ![AwsEc2ContainerRegistryRegistry card](AwsEc2ContainerRegistryRegistry.card.png) |
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

' loads the AwsEc2ContainerRegistryRegistry element
include('elements/aws/Compute/AwsEc2ContainerRegistryRegistry')
AwsEc2ContainerRegistryRegistry('element', 'Ec2 Container Registry Registry', 'an optional tech field')
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

' loads the AWS style
include('styles/aws')

' loads the AwsEc2ContainerRegistryRegistry element
include('elements/aws/Compute/AwsEc2ContainerRegistryRegistry')
AwsEc2ContainerRegistryRegistry('element', 'Ec2 Container Registry Registry', 'an optional tech field')
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

' loads the AwsEc2ContainerRegistryRegistry card
include('elements/aws/Compute/AwsEc2ContainerRegistryRegistry')
AwsEc2ContainerRegistryRegistryCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GCP style
include('styles/gcp')

' loads the AwsEc2ContainerRegistryRegistry card
include('elements/aws/Compute/AwsEc2ContainerRegistryRegistry')
AwsEc2ContainerRegistryRegistryCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
