# AwsGroupElasticBeanstalkContainer
| Example | Resource |
| :-: | --- |
| ![AwsGroupElasticBeanstalkContainer group](AwsGroupElasticBeanstalkContainer.group.png) | `groups/aws/AwsGroupElasticBeanstalkContainer` |
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

' loads the AwsGroupElasticBeanstalkContainer group
include('groups/aws/AwsGroupElasticBeanstalkContainer')
AwsGroupElasticBeanstalkContainer('element', 'Elastic Beanstalk Container', 'an optional tech field')
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

' loads the AwsGroupElasticBeanstalkContainer group
include('groups/aws/AwsGroupElasticBeanstalkContainer')
AwsGroupElasticBeanstalkContainer('element', 'Elastic Beanstalk Container', 'an optional tech field')
@enduml
```
