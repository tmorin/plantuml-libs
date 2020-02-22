# AzureMobileInventory
```text
elements/azure/FlatSymbols/CneIntune/AzureMobileInventory
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureMobileInventory icon](../../../../icons/azure/FlatSymbols/CneIntune/AzureMobileInventory.png) | ![AzureMobileInventory element](AzureMobileInventory.element.png) | ![AzureMobileInventory card](AzureMobileInventory.card.png) |
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

' loads the AzureMobileInventory element
include('elements/azure/FlatSymbols/CneIntune/AzureMobileInventory')
AzureMobileInventory('element', 'Mobile Inventory', 'an optional tech field')
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

' loads the AzureMobileInventory element
include('elements/azure/FlatSymbols/CneIntune/AzureMobileInventory')
AzureMobileInventory('element', 'Mobile Inventory', 'an optional tech field')
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

' loads the AzureMobileInventory card
include('elements/azure/FlatSymbols/CneIntune/AzureMobileInventory')
AzureMobileInventoryCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureMobileInventory card
include('elements/azure/FlatSymbols/CneIntune/AzureMobileInventory')
AzureMobileInventoryCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
