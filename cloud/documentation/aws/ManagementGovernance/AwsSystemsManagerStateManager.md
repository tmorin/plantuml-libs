# AwsSystemsManagerStateManager
```text
elements/aws/ManagementGovernance/AwsSystemsManagerStateManager
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsSystemsManagerStateManager icon](../../../icons/aws/ManagementGovernance/AwsSystemsManagerStateManager.png) | ![AwsSystemsManagerStateManager element](AwsSystemsManagerStateManager.element.png) | ![AwsSystemsManagerStateManager card](AwsSystemsManagerStateManager.card.png) |
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

' loads the AwsSystemsManagerStateManager element
include('elements/aws/ManagementGovernance/AwsSystemsManagerStateManager')
AwsSystemsManagerStateManager('element', 'Systems Manager State Manager', 'an optional tech field')
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

' loads the AwsSystemsManagerStateManager element
include('elements/aws/ManagementGovernance/AwsSystemsManagerStateManager')
AwsSystemsManagerStateManager('element', 'Systems Manager State Manager', 'an optional tech field')
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

' loads the AwsSystemsManagerStateManager card
include('elements/aws/ManagementGovernance/AwsSystemsManagerStateManager')
AwsSystemsManagerStateManagerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsSystemsManagerStateManager card
include('elements/aws/ManagementGovernance/AwsSystemsManagerStateManager')
AwsSystemsManagerStateManagerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
