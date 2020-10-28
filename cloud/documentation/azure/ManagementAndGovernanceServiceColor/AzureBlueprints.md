# AzureBlueprints
```text
elements/azure/ManagementAndGovernanceServiceColor/AzureBlueprints
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureBlueprints icon](../../../icons/azure/ManagementAndGovernanceServiceColor/AzureBlueprints.png) | ![AzureBlueprints element](AzureBlueprints.element.png) | ![AzureBlueprints card](AzureBlueprints.card.png) |
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
include('styles/azure')

' loads the AzureBlueprints element
include('elements/azure/ManagementAndGovernanceServiceColor/AzureBlueprints')
AzureBlueprints('element', 'Blueprints', 'an optional tech field')
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
include('styles/azure')

' loads the AzureBlueprints element
include('elements/azure/ManagementAndGovernanceServiceColor/AzureBlueprints')
AzureBlueprints('element', 'Blueprints', 'an optional tech field')
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
include('styles/azure')

' loads the AzureBlueprints card
include('elements/azure/ManagementAndGovernanceServiceColor/AzureBlueprints')
AzureBlueprintsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
include('styles/azure')

' loads the AzureBlueprints card
include('elements/azure/ManagementAndGovernanceServiceColor/AzureBlueprints')
AzureBlueprintsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
