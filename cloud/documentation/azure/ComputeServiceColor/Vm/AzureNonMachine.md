# AzureNonMachine
```text
elements/azure/ComputeServiceColor/Vm/AzureNonMachine
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureNonMachine icon](../../../../icons/azure/ComputeServiceColor/Vm/AzureNonMachine.png) | ![AzureNonMachine element](AzureNonMachine.element.png) | ![AzureNonMachine card](AzureNonMachine.card.png) |
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

' loads the AzureNonMachine element
include('elements/azure/ComputeServiceColor/Vm/AzureNonMachine')
AzureNonMachine('element', 'Non Machine', 'an optional tech field')
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

' loads the AzureNonMachine element
include('elements/azure/ComputeServiceColor/Vm/AzureNonMachine')
AzureNonMachine('element', 'Non Machine', 'an optional tech field')
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

' loads the AzureNonMachine card
include('elements/azure/ComputeServiceColor/Vm/AzureNonMachine')
AzureNonMachineCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureNonMachine card
include('elements/azure/ComputeServiceColor/Vm/AzureNonMachine')
AzureNonMachineCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
