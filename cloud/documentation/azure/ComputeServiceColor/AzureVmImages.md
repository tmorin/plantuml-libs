# AzureVmImages
```text
elements/azure/ComputeServiceColor/AzureVmImages
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureVmImages icon](../../../icons/azure/ComputeServiceColor/AzureVmImages.png) | ![AzureVmImages element](AzureVmImages.element.png) | ![AzureVmImages card](AzureVmImages.card.png) |
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

' loads the AzureVmImages element
include('elements/azure/ComputeServiceColor/AzureVmImages')
AzureVmImages('element', 'Vm Images', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../../"

' loads the library
!include ../../../library.puml

' loads the style
include('styles/azure')

' loads the AzureVmImages element
include('elements/azure/ComputeServiceColor/AzureVmImages')
AzureVmImages('element', 'Vm Images', 'an optional tech field')
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

' loads the AzureVmImages card
include('elements/azure/ComputeServiceColor/AzureVmImages')
AzureVmImagesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../../"

' loads the library
!include ../../../library.puml

' loads the style
include('styles/azure')

' loads the AzureVmImages card
include('elements/azure/ComputeServiceColor/AzureVmImages')
AzureVmImagesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
