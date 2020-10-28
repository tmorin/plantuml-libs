# AwsElasticBlockStoreEbs
```text
elements/aws/Storage/AwsElasticBlockStoreEbs
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsElasticBlockStoreEbs icon](../../../icons/aws/Storage/AwsElasticBlockStoreEbs.png) | ![AwsElasticBlockStoreEbs element](AwsElasticBlockStoreEbs.element.png) | ![AwsElasticBlockStoreEbs card](AwsElasticBlockStoreEbs.card.png) |
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

' loads the AwsElasticBlockStoreEbs element
include('elements/aws/Storage/AwsElasticBlockStoreEbs')
AwsElasticBlockStoreEbs('element', 'Elastic Block Store Ebs', 'an optional tech field')
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

' loads the AwsElasticBlockStoreEbs element
include('elements/aws/Storage/AwsElasticBlockStoreEbs')
AwsElasticBlockStoreEbs('element', 'Elastic Block Store Ebs', 'an optional tech field')
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

' loads the AwsElasticBlockStoreEbs card
include('elements/aws/Storage/AwsElasticBlockStoreEbs')
AwsElasticBlockStoreEbsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsElasticBlockStoreEbs card
include('elements/aws/Storage/AwsElasticBlockStoreEbs')
AwsElasticBlockStoreEbsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
