# AzureVmLinuxExternal
```text
elements/azure/ComputeServiceColor/Vm/AzureVmLinuxExternal
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureVmLinuxExternal icon](../../../../icons/azure/ComputeServiceColor/Vm/AzureVmLinuxExternal.png) | ![AzureVmLinuxExternal element](AzureVmLinuxExternal.element.png) | ![AzureVmLinuxExternal card](AzureVmLinuxExternal.card.png) |
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

' loads the AzureVmLinuxExternal element
include('elements/azure/ComputeServiceColor/Vm/AzureVmLinuxExternal')
AzureVmLinuxExternal('element', 'Vm Linux External', 'an optional tech field')
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

' loads the AzureVmLinuxExternal element
include('elements/azure/ComputeServiceColor/Vm/AzureVmLinuxExternal')
AzureVmLinuxExternal('element', 'Vm Linux External', 'an optional tech field')
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

' loads the AzureVmLinuxExternal card
include('elements/azure/ComputeServiceColor/Vm/AzureVmLinuxExternal')
AzureVmLinuxExternalCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureVmLinuxExternal card
include('elements/azure/ComputeServiceColor/Vm/AzureVmLinuxExternal')
AzureVmLinuxExternalCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
