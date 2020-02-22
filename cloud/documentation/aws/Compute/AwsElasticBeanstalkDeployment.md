# AwsElasticBeanstalkDeployment
```text
elements/aws/Compute/AwsElasticBeanstalkDeployment
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsElasticBeanstalkDeployment icon](../../../icons/aws/Compute/AwsElasticBeanstalkDeployment.png) | ![AwsElasticBeanstalkDeployment element](AwsElasticBeanstalkDeployment.element.png) | ![AwsElasticBeanstalkDeployment card](AwsElasticBeanstalkDeployment.card.png) |
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

' loads the AwsElasticBeanstalkDeployment element
include('elements/aws/Compute/AwsElasticBeanstalkDeployment')
AwsElasticBeanstalkDeployment('element', 'Elastic Beanstalk Deployment', 'an optional tech field')
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

' loads the AwsElasticBeanstalkDeployment element
include('elements/aws/Compute/AwsElasticBeanstalkDeployment')
AwsElasticBeanstalkDeployment('element', 'Elastic Beanstalk Deployment', 'an optional tech field')
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

' loads the AwsElasticBeanstalkDeployment card
include('elements/aws/Compute/AwsElasticBeanstalkDeployment')
AwsElasticBeanstalkDeploymentCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsElasticBeanstalkDeployment card
include('elements/aws/Compute/AwsElasticBeanstalkDeployment')
AwsElasticBeanstalkDeploymentCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
