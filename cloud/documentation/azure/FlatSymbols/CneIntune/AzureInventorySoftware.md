# AzureInventorySoftware
```text
elements/azure/FlatSymbols/CneIntune/AzureInventorySoftware
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureInventorySoftware icon](../../../../icons/azure/FlatSymbols/CneIntune/AzureInventorySoftware.png) | ![AzureInventorySoftware element](AzureInventorySoftware.element.png) | ![AzureInventorySoftware card](AzureInventorySoftware.card.png) |
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

' loads the AzureInventorySoftware element
include('elements/azure/FlatSymbols/CneIntune/AzureInventorySoftware')
AzureInventorySoftware('element', 'Inventory Software', 'an optional tech field')
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

' loads the AzureInventorySoftware element
include('elements/azure/FlatSymbols/CneIntune/AzureInventorySoftware')
AzureInventorySoftware('element', 'Inventory Software', 'an optional tech field')
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

' loads the AzureInventorySoftware card
include('elements/azure/FlatSymbols/CneIntune/AzureInventorySoftware')
AzureInventorySoftwareCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureInventorySoftware card
include('elements/azure/FlatSymbols/CneIntune/AzureInventorySoftware')
AzureInventorySoftwareCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
