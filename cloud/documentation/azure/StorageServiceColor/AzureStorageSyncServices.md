# AzureStorageSyncServices
```text
elements/azure/StorageServiceColor/AzureStorageSyncServices
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureStorageSyncServices icon](../../../icons/azure/StorageServiceColor/AzureStorageSyncServices.png) | ![AzureStorageSyncServices element](AzureStorageSyncServices.element.png) | ![AzureStorageSyncServices card](AzureStorageSyncServices.card.png) |
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

' loads the AzureStorageSyncServices element
include('elements/azure/StorageServiceColor/AzureStorageSyncServices')
AzureStorageSyncServices('element', 'Storage Sync Services', 'an optional tech field')
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

' loads the AzureStorageSyncServices element
include('elements/azure/StorageServiceColor/AzureStorageSyncServices')
AzureStorageSyncServices('element', 'Storage Sync Services', 'an optional tech field')
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

' loads the AzureStorageSyncServices card
include('elements/azure/StorageServiceColor/AzureStorageSyncServices')
AzureStorageSyncServicesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureStorageSyncServices card
include('elements/azure/StorageServiceColor/AzureStorageSyncServices')
AzureStorageSyncServicesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
