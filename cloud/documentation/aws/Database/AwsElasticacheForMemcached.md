# AwsElasticacheForMemcached
```text
elements/aws/Database/AwsElasticacheForMemcached
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsElasticacheForMemcached icon](../../../icons/aws/Database/AwsElasticacheForMemcached.png) | ![AwsElasticacheForMemcached element](AwsElasticacheForMemcached.element.png) | ![AwsElasticacheForMemcached card](AwsElasticacheForMemcached.card.png) |
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

' loads the AwsElasticacheForMemcached element
include('elements/aws/Database/AwsElasticacheForMemcached')
AwsElasticacheForMemcached('element', 'Elasticache For Memcached', 'an optional tech field')
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

' loads the AwsElasticacheForMemcached element
include('elements/aws/Database/AwsElasticacheForMemcached')
AwsElasticacheForMemcached('element', 'Elasticache For Memcached', 'an optional tech field')
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

' loads the AwsElasticacheForMemcached card
include('elements/aws/Database/AwsElasticacheForMemcached')
AwsElasticacheForMemcachedCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsElasticacheForMemcached card
include('elements/aws/Database/AwsElasticacheForMemcached')
AwsElasticacheForMemcachedCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
