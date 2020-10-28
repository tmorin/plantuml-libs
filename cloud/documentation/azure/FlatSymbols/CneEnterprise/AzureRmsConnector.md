# AzureRmsConnector
```text
elements/azure/FlatSymbols/CneEnterprise/AzureRmsConnector
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureRmsConnector icon](../../../../icons/azure/FlatSymbols/CneEnterprise/AzureRmsConnector.png) | ![AzureRmsConnector element](AzureRmsConnector.element.png) | ![AzureRmsConnector card](AzureRmsConnector.card.png) |
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

' loads the AzureRmsConnector element
include('elements/azure/FlatSymbols/CneEnterprise/AzureRmsConnector')
AzureRmsConnector('element', 'Rms Connector', 'an optional tech field')
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

' loads the AzureRmsConnector element
include('elements/azure/FlatSymbols/CneEnterprise/AzureRmsConnector')
AzureRmsConnector('element', 'Rms Connector', 'an optional tech field')
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

' loads the AzureRmsConnector card
include('elements/azure/FlatSymbols/CneEnterprise/AzureRmsConnector')
AzureRmsConnectorCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureRmsConnector card
include('elements/azure/FlatSymbols/CneEnterprise/AzureRmsConnector')
AzureRmsConnectorCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
