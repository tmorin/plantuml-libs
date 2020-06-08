# AwsParallelCluster
```text
elements/aws/Compute/AwsParallelCluster
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsParallelCluster icon](../../../icons/aws/Compute/AwsParallelCluster.png) | ![AwsParallelCluster element](AwsParallelCluster.element.png) | ![AwsParallelCluster card](AwsParallelCluster.card.png) |
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

' loads the AwsParallelCluster element
include('elements/aws/Compute/AwsParallelCluster')
AwsParallelCluster('element', 'Parallel Cluster', 'an optional tech field')
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

' loads the AwsParallelCluster element
include('elements/aws/Compute/AwsParallelCluster')
AwsParallelCluster('element', 'Parallel Cluster', 'an optional tech field')
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

' loads the AwsParallelCluster card
include('elements/aws/Compute/AwsParallelCluster')
AwsParallelClusterCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsParallelCluster card
include('elements/aws/Compute/AwsParallelCluster')
AwsParallelClusterCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
