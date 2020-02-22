# AwsGroupElasticContainerService
| Example | Resource |
| :-: | --- |
| ![AwsGroupElasticContainerService group](AwsGroupElasticContainerService.group.png) | `groups/aws/AwsGroupElasticContainerService` |
## Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the AWS style
include('styles/aws')

' loads the AwsGroupElasticContainerService group
include('groups/aws/AwsGroupElasticContainerService')
AwsGroupElasticContainerService('element', 'Elastic Container Service', 'an optional tech field')
@enduml
```
## Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../"

' loads the library
!include ../../library.puml

' loads the AWS style
include('styles/aws')

' loads the AwsGroupElasticContainerService group
include('groups/aws/AwsGroupElasticContainerService')
AwsGroupElasticContainerService('element', 'Elastic Container Service', 'an optional tech field')
@enduml
```
