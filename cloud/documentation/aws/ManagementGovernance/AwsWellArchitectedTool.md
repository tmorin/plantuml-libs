# AwsWellArchitectedTool
```text
elements/aws/ManagementGovernance/AwsWellArchitectedTool
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsWellArchitectedTool icon](../../../icons/aws/ManagementGovernance/AwsWellArchitectedTool.png) | ![AwsWellArchitectedTool element](AwsWellArchitectedTool.element.png) | ![AwsWellArchitectedTool card](AwsWellArchitectedTool.card.png) |
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

' loads the AwsWellArchitectedTool element
include('elements/aws/ManagementGovernance/AwsWellArchitectedTool')
AwsWellArchitectedTool('element', 'Well Architected Tool', 'an optional tech field')
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

' loads the AwsWellArchitectedTool element
include('elements/aws/ManagementGovernance/AwsWellArchitectedTool')
AwsWellArchitectedTool('element', 'Well Architected Tool', 'an optional tech field')
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

' loads the AwsWellArchitectedTool card
include('elements/aws/ManagementGovernance/AwsWellArchitectedTool')
AwsWellArchitectedToolCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsWellArchitectedTool card
include('elements/aws/ManagementGovernance/AwsWellArchitectedTool')
AwsWellArchitectedToolCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
