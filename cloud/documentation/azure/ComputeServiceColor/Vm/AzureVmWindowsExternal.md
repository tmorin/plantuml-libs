# AzureVmWindowsExternal
```text
elements/azure/ComputeServiceColor/Vm/AzureVmWindowsExternal
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureVmWindowsExternal icon](../../../../icons/azure/ComputeServiceColor/Vm/AzureVmWindowsExternal.png) | ![AzureVmWindowsExternal element](AzureVmWindowsExternal.element.png) | ![AzureVmWindowsExternal card](AzureVmWindowsExternal.card.png) |
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

' loads the AzureVmWindowsExternal element
include('elements/azure/ComputeServiceColor/Vm/AzureVmWindowsExternal')
AzureVmWindowsExternal('element', 'Vm Windows External', 'an optional tech field')
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

' loads the AzureVmWindowsExternal element
include('elements/azure/ComputeServiceColor/Vm/AzureVmWindowsExternal')
AzureVmWindowsExternal('element', 'Vm Windows External', 'an optional tech field')
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

' loads the AzureVmWindowsExternal card
include('elements/azure/ComputeServiceColor/Vm/AzureVmWindowsExternal')
AzureVmWindowsExternalCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureVmWindowsExternal card
include('elements/azure/ComputeServiceColor/Vm/AzureVmWindowsExternal')
AzureVmWindowsExternalCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
