# AwsElasticFileSystemEfs
```text
elements/aws/Storage/AwsElasticFileSystemEfs
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsElasticFileSystemEfs icon](../../../icons/aws/Storage/AwsElasticFileSystemEfs.png) | ![AwsElasticFileSystemEfs element](AwsElasticFileSystemEfs.element.png) | ![AwsElasticFileSystemEfs card](AwsElasticFileSystemEfs.card.png) |
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

' loads the AwsElasticFileSystemEfs element
include('elements/aws/Storage/AwsElasticFileSystemEfs')
AwsElasticFileSystemEfs('element', 'Elastic File System Efs', 'an optional tech field')
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

' loads the AwsElasticFileSystemEfs element
include('elements/aws/Storage/AwsElasticFileSystemEfs')
AwsElasticFileSystemEfs('element', 'Elastic File System Efs', 'an optional tech field')
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

' loads the AwsElasticFileSystemEfs card
include('elements/aws/Storage/AwsElasticFileSystemEfs')
AwsElasticFileSystemEfsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsElasticFileSystemEfs card
include('elements/aws/Storage/AwsElasticFileSystemEfs')
AwsElasticFileSystemEfsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
