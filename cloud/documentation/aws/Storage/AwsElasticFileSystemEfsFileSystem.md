# AwsElasticFileSystemEfsFileSystem
```text
elements/aws/Storage/AwsElasticFileSystemEfsFileSystem
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsElasticFileSystemEfsFileSystem icon](../../../icons/aws/Storage/AwsElasticFileSystemEfsFileSystem.png) | ![AwsElasticFileSystemEfsFileSystem element](AwsElasticFileSystemEfsFileSystem.element.png) | ![AwsElasticFileSystemEfsFileSystem card](AwsElasticFileSystemEfsFileSystem.card.png) |
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

' loads the AwsElasticFileSystemEfsFileSystem element
include('elements/aws/Storage/AwsElasticFileSystemEfsFileSystem')
AwsElasticFileSystemEfsFileSystem('element', 'Elastic File System Efs File System', 'an optional tech field')
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

' loads the AwsElasticFileSystemEfsFileSystem element
include('elements/aws/Storage/AwsElasticFileSystemEfsFileSystem')
AwsElasticFileSystemEfsFileSystem('element', 'Elastic File System Efs File System', 'an optional tech field')
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

' loads the AwsElasticFileSystemEfsFileSystem card
include('elements/aws/Storage/AwsElasticFileSystemEfsFileSystem')
AwsElasticFileSystemEfsFileSystemCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsElasticFileSystemEfsFileSystem card
include('elements/aws/Storage/AwsElasticFileSystemEfsFileSystem')
AwsElasticFileSystemEfsFileSystemCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
