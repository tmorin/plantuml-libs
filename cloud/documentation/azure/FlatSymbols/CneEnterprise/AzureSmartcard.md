# AzureSmartcard
```text
elements/azure/FlatSymbols/CneEnterprise/AzureSmartcard
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureSmartcard icon](../../../../icons/azure/FlatSymbols/CneEnterprise/AzureSmartcard.png) | ![AzureSmartcard element](AzureSmartcard.element.png) | ![AzureSmartcard card](AzureSmartcard.card.png) |
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

' loads the AzureSmartcard element
include('elements/azure/FlatSymbols/CneEnterprise/AzureSmartcard')
AzureSmartcard('element', 'Smartcard', 'an optional tech field')
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

' loads the AzureSmartcard element
include('elements/azure/FlatSymbols/CneEnterprise/AzureSmartcard')
AzureSmartcard('element', 'Smartcard', 'an optional tech field')
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

' loads the AzureSmartcard card
include('elements/azure/FlatSymbols/CneEnterprise/AzureSmartcard')
AzureSmartcardCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureSmartcard card
include('elements/azure/FlatSymbols/CneEnterprise/AzureSmartcard')
AzureSmartcardCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
