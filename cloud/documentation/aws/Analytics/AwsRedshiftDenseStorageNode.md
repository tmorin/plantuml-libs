# AwsRedshiftDenseStorageNode
```text
elements/aws/Analytics/AwsRedshiftDenseStorageNode
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsRedshiftDenseStorageNode icon](../../../icons/aws/Analytics/AwsRedshiftDenseStorageNode.png) | ![AwsRedshiftDenseStorageNode element](AwsRedshiftDenseStorageNode.element.png) | ![AwsRedshiftDenseStorageNode card](AwsRedshiftDenseStorageNode.card.png) |
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

' loads the AwsRedshiftDenseStorageNode element
include('elements/aws/Analytics/AwsRedshiftDenseStorageNode')
AwsRedshiftDenseStorageNode('element', 'Redshift Dense Storage Node', 'an optional tech field')
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

' loads the AwsRedshiftDenseStorageNode element
include('elements/aws/Analytics/AwsRedshiftDenseStorageNode')
AwsRedshiftDenseStorageNode('element', 'Redshift Dense Storage Node', 'an optional tech field')
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

' loads the AwsRedshiftDenseStorageNode card
include('elements/aws/Analytics/AwsRedshiftDenseStorageNode')
AwsRedshiftDenseStorageNodeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsRedshiftDenseStorageNode card
include('elements/aws/Analytics/AwsRedshiftDenseStorageNode')
AwsRedshiftDenseStorageNodeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
