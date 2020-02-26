# AzureVmWindows
```text
elements/azure/ComputeServiceColor/Vm/AzureVmWindows
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureVmWindows icon](../../../../icons/azure/ComputeServiceColor/Vm/AzureVmWindows.png) | ![AzureVmWindows element](AzureVmWindows.element.png) | ![AzureVmWindows card](AzureVmWindows.card.png) |
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

' loads the AzureVmWindows element
include('elements/azure/ComputeServiceColor/Vm/AzureVmWindows')
AzureVmWindows('element', 'Vm Windows', 'an optional tech field')
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

' loads the AzureVmWindows element
include('elements/azure/ComputeServiceColor/Vm/AzureVmWindows')
AzureVmWindows('element', 'Vm Windows', 'an optional tech field')
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

' loads the AzureVmWindows card
include('elements/azure/ComputeServiceColor/Vm/AzureVmWindows')
AzureVmWindowsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureVmWindows card
include('elements/azure/ComputeServiceColor/Vm/AzureVmWindows')
AzureVmWindowsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
