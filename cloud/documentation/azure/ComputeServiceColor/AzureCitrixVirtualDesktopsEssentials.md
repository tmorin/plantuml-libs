# AzureCitrixVirtualDesktopsEssentials
```text
elements/azure/ComputeServiceColor/AzureCitrixVirtualDesktopsEssentials
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureCitrixVirtualDesktopsEssentials icon](../../../icons/azure/ComputeServiceColor/AzureCitrixVirtualDesktopsEssentials.png) | ![AzureCitrixVirtualDesktopsEssentials element](AzureCitrixVirtualDesktopsEssentials.element.png) | ![AzureCitrixVirtualDesktopsEssentials card](AzureCitrixVirtualDesktopsEssentials.card.png) |
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

' loads the AzureCitrixVirtualDesktopsEssentials element
include('elements/azure/ComputeServiceColor/AzureCitrixVirtualDesktopsEssentials')
AzureCitrixVirtualDesktopsEssentials('element', 'Citrix Virtual Desktops Essentials', 'an optional tech field')
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

' loads the AWS style
include('styles/aws')

' loads the AzureCitrixVirtualDesktopsEssentials element
include('elements/azure/ComputeServiceColor/AzureCitrixVirtualDesktopsEssentials')
AzureCitrixVirtualDesktopsEssentials('element', 'Citrix Virtual Desktops Essentials', 'an optional tech field')
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

' loads the AzureCitrixVirtualDesktopsEssentials card
include('elements/azure/ComputeServiceColor/AzureCitrixVirtualDesktopsEssentials')
AzureCitrixVirtualDesktopsEssentialsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GCP style
include('styles/gcp')

' loads the AzureCitrixVirtualDesktopsEssentials card
include('elements/azure/ComputeServiceColor/AzureCitrixVirtualDesktopsEssentials')
AzureCitrixVirtualDesktopsEssentialsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
