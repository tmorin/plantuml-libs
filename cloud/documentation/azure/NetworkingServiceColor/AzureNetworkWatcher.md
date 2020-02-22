# AzureNetworkWatcher
```text
elements/azure/NetworkingServiceColor/AzureNetworkWatcher
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureNetworkWatcher icon](../../../icons/azure/NetworkingServiceColor/AzureNetworkWatcher.png) | ![AzureNetworkWatcher element](AzureNetworkWatcher.element.png) | ![AzureNetworkWatcher card](AzureNetworkWatcher.card.png) |
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

' loads the AzureNetworkWatcher element
include('elements/azure/NetworkingServiceColor/AzureNetworkWatcher')
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

' loads the AWS style
include('styles/aws')

' loads the AzureNetworkWatcher element
include('elements/azure/NetworkingServiceColor/AzureNetworkWatcher')
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

' loads the AWS style
include('styles/gcp')

' loads the AzureNetworkWatcher card
include('elements/azure/NetworkingServiceColor/AzureNetworkWatcher')
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

' loads the GCP style
include('styles/gcp')

' loads the AzureNetworkWatcher card
include('elements/azure/NetworkingServiceColor/AzureNetworkWatcher')
AzureNetworkWatcherCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
