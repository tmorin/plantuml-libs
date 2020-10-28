# AzureSecureVirtualMachine
```text
elements/azure/FlatSymbols/CneEnterprise/AzureSecureVirtualMachine
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureSecureVirtualMachine icon](../../../../icons/azure/FlatSymbols/CneEnterprise/AzureSecureVirtualMachine.png) | ![AzureSecureVirtualMachine element](AzureSecureVirtualMachine.element.png) | ![AzureSecureVirtualMachine card](AzureSecureVirtualMachine.card.png) |
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

' loads the AzureSecureVirtualMachine element
include('elements/azure/FlatSymbols/CneEnterprise/AzureSecureVirtualMachine')
AzureSecureVirtualMachine('element', 'Secure Virtual Machine', 'an optional tech field')
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

' loads the AzureSecureVirtualMachine element
include('elements/azure/FlatSymbols/CneEnterprise/AzureSecureVirtualMachine')
AzureSecureVirtualMachine('element', 'Secure Virtual Machine', 'an optional tech field')
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

' loads the AzureSecureVirtualMachine card
include('elements/azure/FlatSymbols/CneEnterprise/AzureSecureVirtualMachine')
AzureSecureVirtualMachineCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureSecureVirtualMachine card
include('elements/azure/FlatSymbols/CneEnterprise/AzureSecureVirtualMachine')
AzureSecureVirtualMachineCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
