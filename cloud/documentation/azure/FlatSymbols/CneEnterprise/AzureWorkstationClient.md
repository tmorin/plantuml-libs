# AzureWorkstationClient
```text
elements/azure/FlatSymbols/CneEnterprise/AzureWorkstationClient
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureWorkstationClient icon](../../../../icons/azure/FlatSymbols/CneEnterprise/AzureWorkstationClient.png) | ![AzureWorkstationClient element](AzureWorkstationClient.element.png) | ![AzureWorkstationClient card](AzureWorkstationClient.card.png) |
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

' loads the AzureWorkstationClient element
include('elements/azure/FlatSymbols/CneEnterprise/AzureWorkstationClient')
AzureWorkstationClient('element', 'Workstation Client', 'an optional tech field')
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

' loads the AzureWorkstationClient element
include('elements/azure/FlatSymbols/CneEnterprise/AzureWorkstationClient')
AzureWorkstationClient('element', 'Workstation Client', 'an optional tech field')
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

' loads the AzureWorkstationClient card
include('elements/azure/FlatSymbols/CneEnterprise/AzureWorkstationClient')
AzureWorkstationClientCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureWorkstationClient card
include('elements/azure/FlatSymbols/CneEnterprise/AzureWorkstationClient')
AzureWorkstationClientCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
