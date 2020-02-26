# AzureEnterprise
```text
elements/azure/FlatSymbols/CneEnterprise/AzureEnterprise
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureEnterprise icon](../../../../icons/azure/FlatSymbols/CneEnterprise/AzureEnterprise.png) | ![AzureEnterprise element](AzureEnterprise.element.png) | ![AzureEnterprise card](AzureEnterprise.card.png) |
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
include('styles/azure')

' loads the AzureEnterprise element
include('elements/azure/FlatSymbols/CneEnterprise/AzureEnterprise')
AzureEnterprise('element', 'Enterprise', 'an optional tech field')
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

' loads the style
include('styles/azure')

' loads the AzureEnterprise element
include('elements/azure/FlatSymbols/CneEnterprise/AzureEnterprise')
AzureEnterprise('element', 'Enterprise', 'an optional tech field')
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
include('styles/azure')

' loads the AzureEnterprise card
include('elements/azure/FlatSymbols/CneEnterprise/AzureEnterprise')
AzureEnterpriseCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the style
include('styles/azure')

' loads the AzureEnterprise card
include('elements/azure/FlatSymbols/CneEnterprise/AzureEnterprise')
AzureEnterpriseCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
