# AzureMaintenance
```text
elements/azure/FlatSymbols/CneEnterprise/AzureMaintenance
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureMaintenance icon](../../../../icons/azure/FlatSymbols/CneEnterprise/AzureMaintenance.png) | ![AzureMaintenance element](AzureMaintenance.element.png) | ![AzureMaintenance card](AzureMaintenance.card.png) |
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

' loads the AzureMaintenance element
include('elements/azure/FlatSymbols/CneEnterprise/AzureMaintenance')
AzureMaintenance('element', 'Maintenance', 'an optional tech field')
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

' loads the AzureMaintenance element
include('elements/azure/FlatSymbols/CneEnterprise/AzureMaintenance')
AzureMaintenance('element', 'Maintenance', 'an optional tech field')
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

' loads the AzureMaintenance card
include('elements/azure/FlatSymbols/CneEnterprise/AzureMaintenance')
AzureMaintenanceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureMaintenance card
include('elements/azure/FlatSymbols/CneEnterprise/AzureMaintenance')
AzureMaintenanceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
