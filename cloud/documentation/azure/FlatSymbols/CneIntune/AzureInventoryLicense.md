# AzureInventoryLicense
```text
elements/azure/FlatSymbols/CneIntune/AzureInventoryLicense
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureInventoryLicense icon](../../../../icons/azure/FlatSymbols/CneIntune/AzureInventoryLicense.png) | ![AzureInventoryLicense element](AzureInventoryLicense.element.png) | ![AzureInventoryLicense card](AzureInventoryLicense.card.png) |
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

' loads the AzureInventoryLicense element
include('elements/azure/FlatSymbols/CneIntune/AzureInventoryLicense')
AzureInventoryLicense('element', 'Inventory License', 'an optional tech field')
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

' loads the AzureInventoryLicense element
include('elements/azure/FlatSymbols/CneIntune/AzureInventoryLicense')
AzureInventoryLicense('element', 'Inventory License', 'an optional tech field')
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

' loads the AzureInventoryLicense card
include('elements/azure/FlatSymbols/CneIntune/AzureInventoryLicense')
AzureInventoryLicenseCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureInventoryLicense card
include('elements/azure/FlatSymbols/CneIntune/AzureInventoryLicense')
AzureInventoryLicenseCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
