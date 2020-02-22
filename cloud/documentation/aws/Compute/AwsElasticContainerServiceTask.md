# AwsElasticContainerServiceTask
```text
elements/aws/Compute/AwsElasticContainerServiceTask
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsElasticContainerServiceTask icon](../../../icons/aws/Compute/AwsElasticContainerServiceTask.png) | ![AwsElasticContainerServiceTask element](AwsElasticContainerServiceTask.element.png) | ![AwsElasticContainerServiceTask card](AwsElasticContainerServiceTask.card.png) |
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

' loads the AwsElasticContainerServiceTask element
include('elements/aws/Compute/AwsElasticContainerServiceTask')
AwsElasticContainerServiceTask('element', 'Elastic Container Service Task', 'an optional tech field')
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

' loads the AwsElasticContainerServiceTask element
include('elements/aws/Compute/AwsElasticContainerServiceTask')
AwsElasticContainerServiceTask('element', 'Elastic Container Service Task', 'an optional tech field')
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

' loads the AwsElasticContainerServiceTask card
include('elements/aws/Compute/AwsElasticContainerServiceTask')
AwsElasticContainerServiceTaskCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsElasticContainerServiceTask card
include('elements/aws/Compute/AwsElasticContainerServiceTask')
AwsElasticContainerServiceTaskCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
