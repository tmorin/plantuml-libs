# AwsCloudformationChangeSet
```text
elements/aws/ManagementGovernance/AwsCloudformationChangeSet
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsCloudformationChangeSet icon](../../../icons/aws/ManagementGovernance/AwsCloudformationChangeSet.png) | ![AwsCloudformationChangeSet element](AwsCloudformationChangeSet.element.png) | ![AwsCloudformationChangeSet card](AwsCloudformationChangeSet.card.png) |
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

' loads the AwsCloudformationChangeSet element
include('elements/aws/ManagementGovernance/AwsCloudformationChangeSet')
AwsCloudformationChangeSet('element', 'Cloudformation Change Set', 'an optional tech field')
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

' loads the AwsCloudformationChangeSet element
include('elements/aws/ManagementGovernance/AwsCloudformationChangeSet')
AwsCloudformationChangeSet('element', 'Cloudformation Change Set', 'an optional tech field')
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

' loads the AwsCloudformationChangeSet card
include('elements/aws/ManagementGovernance/AwsCloudformationChangeSet')
AwsCloudformationChangeSetCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsCloudformationChangeSet card
include('elements/aws/ManagementGovernance/AwsCloudformationChangeSet')
AwsCloudformationChangeSetCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
