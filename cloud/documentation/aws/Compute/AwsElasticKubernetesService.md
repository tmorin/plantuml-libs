# AwsElasticKubernetesService
```text
elements/aws/Compute/AwsElasticKubernetesService
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsElasticKubernetesService icon](../../../icons/aws/Compute/AwsElasticKubernetesService.png) | ![AwsElasticKubernetesService element](AwsElasticKubernetesService.element.png) | ![AwsElasticKubernetesService card](AwsElasticKubernetesService.card.png) |
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

' loads the AwsElasticKubernetesService element
include('elements/aws/Compute/AwsElasticKubernetesService')
AwsElasticKubernetesService('element', 'Elastic Kubernetes Service', 'an optional tech field')
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

' loads the AwsElasticKubernetesService element
include('elements/aws/Compute/AwsElasticKubernetesService')
AwsElasticKubernetesService('element', 'Elastic Kubernetes Service', 'an optional tech field')
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

' loads the AwsElasticKubernetesService card
include('elements/aws/Compute/AwsElasticKubernetesService')
AwsElasticKubernetesServiceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsElasticKubernetesService card
include('elements/aws/Compute/AwsElasticKubernetesService')
AwsElasticKubernetesServiceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
