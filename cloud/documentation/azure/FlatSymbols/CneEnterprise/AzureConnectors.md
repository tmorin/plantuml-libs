# AzureConnectors
```text
elements/azure/FlatSymbols/CneEnterprise/AzureConnectors
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureConnectors icon](../../../../icons/azure/FlatSymbols/CneEnterprise/AzureConnectors.png) | ![AzureConnectors element](AzureConnectors.element.png) | ![AzureConnectors card](AzureConnectors.card.png) |
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

' loads the AzureConnectors element
include('elements/azure/FlatSymbols/CneEnterprise/AzureConnectors')
AzureConnectors('element', 'Connectors', 'an optional tech field')
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

' loads the AzureConnectors element
include('elements/azure/FlatSymbols/CneEnterprise/AzureConnectors')
AzureConnectors('element', 'Connectors', 'an optional tech field')
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

' loads the AzureConnectors card
include('elements/azure/FlatSymbols/CneEnterprise/AzureConnectors')
AzureConnectorsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureConnectors card
include('elements/azure/FlatSymbols/CneEnterprise/AzureConnectors')
AzureConnectorsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
