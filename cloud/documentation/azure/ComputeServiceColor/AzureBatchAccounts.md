# AzureBatchAccounts
```text
elements/azure/ComputeServiceColor/AzureBatchAccounts
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureBatchAccounts icon](../../../icons/azure/ComputeServiceColor/AzureBatchAccounts.png) | ![AzureBatchAccounts element](AzureBatchAccounts.element.png) | ![AzureBatchAccounts card](AzureBatchAccounts.card.png) |
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

' loads the AzureBatchAccounts element
include('elements/azure/ComputeServiceColor/AzureBatchAccounts')
AzureBatchAccounts('element', 'Batch Accounts', 'an optional tech field')
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

' loads the AzureBatchAccounts element
include('elements/azure/ComputeServiceColor/AzureBatchAccounts')
AzureBatchAccounts('element', 'Batch Accounts', 'an optional tech field')
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

' loads the AzureBatchAccounts card
include('elements/azure/ComputeServiceColor/AzureBatchAccounts')
AzureBatchAccountsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureBatchAccounts card
include('elements/azure/ComputeServiceColor/AzureBatchAccounts')
AzureBatchAccountsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
