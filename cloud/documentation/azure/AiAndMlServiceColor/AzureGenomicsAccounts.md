# AzureGenomicsAccounts
```text
elements/azure/AiAndMlServiceColor/AzureGenomicsAccounts
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureGenomicsAccounts icon](../../../icons/azure/AiAndMlServiceColor/AzureGenomicsAccounts.png) | ![AzureGenomicsAccounts element](AzureGenomicsAccounts.element.png) | ![AzureGenomicsAccounts card](AzureGenomicsAccounts.card.png) |
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

' loads the AzureGenomicsAccounts element
include('elements/azure/AiAndMlServiceColor/AzureGenomicsAccounts')
AzureGenomicsAccounts('element', 'Genomics Accounts', 'an optional tech field')
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

' loads the AzureGenomicsAccounts element
include('elements/azure/AiAndMlServiceColor/AzureGenomicsAccounts')
AzureGenomicsAccounts('element', 'Genomics Accounts', 'an optional tech field')
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

' loads the AzureGenomicsAccounts card
include('elements/azure/AiAndMlServiceColor/AzureGenomicsAccounts')
AzureGenomicsAccountsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureGenomicsAccounts card
include('elements/azure/AiAndMlServiceColor/AzureGenomicsAccounts')
AzureGenomicsAccountsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
