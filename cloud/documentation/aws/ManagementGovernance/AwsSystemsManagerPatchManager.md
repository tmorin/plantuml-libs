# AwsSystemsManagerPatchManager
```text
elements/aws/ManagementGovernance/AwsSystemsManagerPatchManager
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsSystemsManagerPatchManager icon](../../../icons/aws/ManagementGovernance/AwsSystemsManagerPatchManager.png) | ![AwsSystemsManagerPatchManager element](AwsSystemsManagerPatchManager.element.png) | ![AwsSystemsManagerPatchManager card](AwsSystemsManagerPatchManager.card.png) |
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

' loads the AwsSystemsManagerPatchManager element
include('elements/aws/ManagementGovernance/AwsSystemsManagerPatchManager')
AwsSystemsManagerPatchManager('element', 'Systems Manager Patch Manager', 'an optional tech field')
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

' loads the AwsSystemsManagerPatchManager element
include('elements/aws/ManagementGovernance/AwsSystemsManagerPatchManager')
AwsSystemsManagerPatchManager('element', 'Systems Manager Patch Manager', 'an optional tech field')
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

' loads the AwsSystemsManagerPatchManager card
include('elements/aws/ManagementGovernance/AwsSystemsManagerPatchManager')
AwsSystemsManagerPatchManagerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsSystemsManagerPatchManager card
include('elements/aws/ManagementGovernance/AwsSystemsManagerPatchManager')
AwsSystemsManagerPatchManagerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```