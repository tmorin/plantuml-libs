# AwsEmrHdfsCluster
```text
elements/aws/Analytics/AwsEmrHdfsCluster
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsEmrHdfsCluster icon](../../../icons/aws/Analytics/AwsEmrHdfsCluster.png) | ![AwsEmrHdfsCluster element](AwsEmrHdfsCluster.element.png) | ![AwsEmrHdfsCluster card](AwsEmrHdfsCluster.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/aws')

' loads the AwsEmrHdfsCluster element
include('elements/aws/Analytics/AwsEmrHdfsCluster')
AwsEmrHdfsCluster('element', 'Emr Hdfs Cluster', 'an optional tech field')
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

' loads the AwsEmrHdfsCluster element
include('elements/aws/Analytics/AwsEmrHdfsCluster')
AwsEmrHdfsCluster('element', 'Emr Hdfs Cluster', 'an optional tech field')
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

' loads the style
include('styles/aws')

' loads the AwsEmrHdfsCluster card
include('elements/aws/Analytics/AwsEmrHdfsCluster')
AwsEmrHdfsClusterCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsEmrHdfsCluster card
include('elements/aws/Analytics/AwsEmrHdfsCluster')
AwsEmrHdfsClusterCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
