# AzureDiskSnapshots
```text
elements/azure/ComputeServiceColor/AzureDiskSnapshots
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureDiskSnapshots icon](../../../icons/azure/ComputeServiceColor/AzureDiskSnapshots.png) | ![AzureDiskSnapshots element](AzureDiskSnapshots.element.png) | ![AzureDiskSnapshots card](AzureDiskSnapshots.card.png) |
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

' loads the AzureDiskSnapshots element
include('elements/azure/ComputeServiceColor/AzureDiskSnapshots')
AzureDiskSnapshots('element', 'Disk Snapshots', 'an optional tech field')
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

' loads the AzureDiskSnapshots element
include('elements/azure/ComputeServiceColor/AzureDiskSnapshots')
AzureDiskSnapshots('element', 'Disk Snapshots', 'an optional tech field')
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

' loads the AzureDiskSnapshots card
include('elements/azure/ComputeServiceColor/AzureDiskSnapshots')
AzureDiskSnapshotsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureDiskSnapshots card
include('elements/azure/ComputeServiceColor/AzureDiskSnapshots')
AzureDiskSnapshotsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
