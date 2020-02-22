# AzureEnterpriseBuilding
```text
elements/azure/FlatSymbols/CneEnterprise/AzureEnterpriseBuilding
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureEnterpriseBuilding icon](../../../../icons/azure/FlatSymbols/CneEnterprise/AzureEnterpriseBuilding.png) | ![AzureEnterpriseBuilding element](AzureEnterpriseBuilding.element.png) | ![AzureEnterpriseBuilding card](AzureEnterpriseBuilding.card.png) |
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

' loads the AzureEnterpriseBuilding element
include('elements/azure/FlatSymbols/CneEnterprise/AzureEnterpriseBuilding')
AzureEnterpriseBuilding('element', 'Enterprise Building', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../../../"

' loads the library
!include ../../../../library.puml

' loads the AWS style
include('styles/aws')

' loads the AzureEnterpriseBuilding element
include('elements/azure/FlatSymbols/CneEnterprise/AzureEnterpriseBuilding')
AzureEnterpriseBuilding('element', 'Enterprise Building', 'an optional tech field')
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

' loads the AzureEnterpriseBuilding card
include('elements/azure/FlatSymbols/CneEnterprise/AzureEnterpriseBuilding')
AzureEnterpriseBuildingCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../../../"

' loads the library
!include ../../../../library.puml

' loads the GCP style
include('styles/gcp')

' loads the AzureEnterpriseBuilding card
include('elements/azure/FlatSymbols/CneEnterprise/AzureEnterpriseBuilding')
AzureEnterpriseBuildingCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
