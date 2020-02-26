# AzureNetworkWatcher
```text
elements/azure/ManagementAndGovernanceServiceColor/AzureNetworkWatcher
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureNetworkWatcher icon](../../../icons/azure/ManagementAndGovernanceServiceColor/AzureNetworkWatcher.png) | ![AzureNetworkWatcher element](AzureNetworkWatcher.element.png) | ![AzureNetworkWatcher card](AzureNetworkWatcher.card.png) |
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

' loads the AzureNetworkWatcher element
include('elements/azure/ManagementAndGovernanceServiceColor/AzureNetworkWatcher')
AzureNetworkWatcher('element', 'Network Watcher', 'an optional tech field')
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

' loads the AzureNetworkWatcher element
include('elements/azure/ManagementAndGovernanceServiceColor/AzureNetworkWatcher')
AzureNetworkWatcher('element', 'Network Watcher', 'an optional tech field')
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

' loads the AzureNetworkWatcher card
include('elements/azure/ManagementAndGovernanceServiceColor/AzureNetworkWatcher')
AzureNetworkWatcherCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureNetworkWatcher card
include('elements/azure/ManagementAndGovernanceServiceColor/AzureNetworkWatcher')
AzureNetworkWatcherCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
