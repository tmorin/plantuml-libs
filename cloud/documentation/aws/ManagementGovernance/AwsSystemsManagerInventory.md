# AwsSystemsManagerInventory
```text
elements/aws/ManagementGovernance/AwsSystemsManagerInventory
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AwsSystemsManagerInventory icon](../../../icons/aws/ManagementGovernance/AwsSystemsManagerInventory.png) | ![AwsSystemsManagerInventory element](AwsSystemsManagerInventory.element.png) | ![AwsSystemsManagerInventory card](AwsSystemsManagerInventory.card.png) |
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

' loads the AwsSystemsManagerInventory element
include('elements/aws/ManagementGovernance/AwsSystemsManagerInventory')
AwsSystemsManagerInventory('element', 'Systems Manager Inventory', 'an optional tech field')
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

' loads the AwsSystemsManagerInventory element
include('elements/aws/ManagementGovernance/AwsSystemsManagerInventory')
AwsSystemsManagerInventory('element', 'Systems Manager Inventory', 'an optional tech field')
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

' loads the AwsSystemsManagerInventory card
include('elements/aws/ManagementGovernance/AwsSystemsManagerInventory')
AwsSystemsManagerInventoryCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AwsSystemsManagerInventory card
include('elements/aws/ManagementGovernance/AwsSystemsManagerInventory')
AwsSystemsManagerInventoryCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
