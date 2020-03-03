# AwsRedshiftDenseComputeNode
```text
elements/aws/Database/AwsRedshiftDenseComputeNode
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsRedshiftDenseComputeNode icon](../../../icons/aws/Database/AwsRedshiftDenseComputeNode.png) | ![AwsRedshiftDenseComputeNode element](AwsRedshiftDenseComputeNode.element.png) | ![AwsRedshiftDenseComputeNode card](AwsRedshiftDenseComputeNode.card.png) |
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

' loads the AwsRedshiftDenseComputeNode element
include('elements/aws/Database/AwsRedshiftDenseComputeNode')
AwsRedshiftDenseComputeNode('element', 'Redshift Dense Compute Node', 'an optional tech field')
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

' loads the AwsRedshiftDenseComputeNode element
include('elements/aws/Database/AwsRedshiftDenseComputeNode')
AwsRedshiftDenseComputeNode('element', 'Redshift Dense Compute Node', 'an optional tech field')
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

' loads the AwsRedshiftDenseComputeNode card
include('elements/aws/Database/AwsRedshiftDenseComputeNode')
AwsRedshiftDenseComputeNodeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsRedshiftDenseComputeNode card
include('elements/aws/Database/AwsRedshiftDenseComputeNode')
AwsRedshiftDenseComputeNodeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```