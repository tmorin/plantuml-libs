# AzureVm
```text
elements/azure/ComputeServiceColor/Vm/AzureVm
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureVm icon](../../../../icons/azure/ComputeServiceColor/Vm/AzureVm.png) | ![AzureVm element](AzureVm.element.png) | ![AzureVm card](AzureVm.card.png) |
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

' loads the AzureVm element
include('elements/azure/ComputeServiceColor/Vm/AzureVm')
AzureVm('element', 'Vm', 'an optional tech field')
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

' loads the AzureVm element
include('elements/azure/ComputeServiceColor/Vm/AzureVm')
AzureVm('element', 'Vm', 'an optional tech field')
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

' loads the AzureVm card
include('elements/azure/ComputeServiceColor/Vm/AzureVm')
AzureVmCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureVm card
include('elements/azure/ComputeServiceColor/Vm/AzureVm')
AzureVmCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
