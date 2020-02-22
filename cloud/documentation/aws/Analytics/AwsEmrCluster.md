# AwsEmrCluster
```text
elements/aws/Analytics/AwsEmrCluster
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsEmrCluster icon](../../../icons/aws/Analytics/AwsEmrCluster.png) | ![AwsEmrCluster element](AwsEmrCluster.element.png) | ![AwsEmrCluster card](AwsEmrCluster.card.png) |
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

' loads the AwsEmrCluster element
include('elements/aws/Analytics/AwsEmrCluster')
AwsEmrCluster('element', 'Emr Cluster', 'an optional tech field')
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

' loads the AwsEmrCluster element
include('elements/aws/Analytics/AwsEmrCluster')
AwsEmrCluster('element', 'Emr Cluster', 'an optional tech field')
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

' loads the AwsEmrCluster card
include('elements/aws/Analytics/AwsEmrCluster')
AwsEmrClusterCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsEmrCluster card
include('elements/aws/Analytics/AwsEmrCluster')
AwsEmrClusterCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
