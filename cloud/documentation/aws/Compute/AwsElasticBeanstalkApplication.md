# AwsElasticBeanstalkApplication
```text
elements/aws/Compute/AwsElasticBeanstalkApplication
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsElasticBeanstalkApplication icon](../../../icons/aws/Compute/AwsElasticBeanstalkApplication.png) | ![AwsElasticBeanstalkApplication element](AwsElasticBeanstalkApplication.element.png) | ![AwsElasticBeanstalkApplication card](AwsElasticBeanstalkApplication.card.png) |
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

' loads the AwsElasticBeanstalkApplication element
include('elements/aws/Compute/AwsElasticBeanstalkApplication')
AwsElasticBeanstalkApplication('element', 'Elastic Beanstalk Application', 'an optional tech field')
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

' loads the AwsElasticBeanstalkApplication element
include('elements/aws/Compute/AwsElasticBeanstalkApplication')
AwsElasticBeanstalkApplication('element', 'Elastic Beanstalk Application', 'an optional tech field')
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

' loads the AwsElasticBeanstalkApplication card
include('elements/aws/Compute/AwsElasticBeanstalkApplication')
AwsElasticBeanstalkApplicationCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsElasticBeanstalkApplication card
include('elements/aws/Compute/AwsElasticBeanstalkApplication')
AwsElasticBeanstalkApplicationCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
