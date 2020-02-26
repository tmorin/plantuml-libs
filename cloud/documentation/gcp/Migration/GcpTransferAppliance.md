# GcpTransferAppliance
```text
elements/gcp/Migration/GcpTransferAppliance
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpTransferAppliance icon](../../../icons/gcp/Migration/GcpTransferAppliance.png) | ![GcpTransferAppliance element](GcpTransferAppliance.element.png) | ![GcpTransferAppliance card](GcpTransferAppliance.card.png) |
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
include('styles/gcp')

' loads the GcpTransferAppliance element
include('elements/gcp/Migration/GcpTransferAppliance')
GcpTransferAppliance('element', 'Transfer Appliance', 'an optional tech field')
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
include('styles/gcp')

' loads the GcpTransferAppliance element
include('elements/gcp/Migration/GcpTransferAppliance')
GcpTransferAppliance('element', 'Transfer Appliance', 'an optional tech field')
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
include('styles/gcp')

' loads the GcpTransferAppliance card
include('elements/gcp/Migration/GcpTransferAppliance')
GcpTransferApplianceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
include('styles/gcp')

' loads the GcpTransferAppliance card
include('elements/gcp/Migration/GcpTransferAppliance')
GcpTransferApplianceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
