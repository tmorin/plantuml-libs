# AwsElasticBeanstalk
```text
elements/aws/Compute/AwsElasticBeanstalk
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsElasticBeanstalk icon](../../../icons/aws/Compute/AwsElasticBeanstalk.png) | ![AwsElasticBeanstalk element](AwsElasticBeanstalk.element.png) | ![AwsElasticBeanstalk card](AwsElasticBeanstalk.card.png) |
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

' loads the AwsElasticBeanstalk element
include('elements/aws/Compute/AwsElasticBeanstalk')
AwsElasticBeanstalk('element', 'Elastic Beanstalk', 'an optional tech field')
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

' loads the AwsElasticBeanstalk element
include('elements/aws/Compute/AwsElasticBeanstalk')
AwsElasticBeanstalk('element', 'Elastic Beanstalk', 'an optional tech field')
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

' loads the AwsElasticBeanstalk card
include('elements/aws/Compute/AwsElasticBeanstalk')
AwsElasticBeanstalkCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsElasticBeanstalk card
include('elements/aws/Compute/AwsElasticBeanstalk')
AwsElasticBeanstalkCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
