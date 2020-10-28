# AzureQueuesStorage
```text
elements/azure/StorageServiceColor/AzureQueuesStorage
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureQueuesStorage icon](../../../icons/azure/StorageServiceColor/AzureQueuesStorage.png) | ![AzureQueuesStorage element](AzureQueuesStorage.element.png) | ![AzureQueuesStorage card](AzureQueuesStorage.card.png) |
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

' loads the AzureQueuesStorage element
include('elements/azure/StorageServiceColor/AzureQueuesStorage')
AzureQueuesStorage('element', 'Queues Storage', 'an optional tech field')
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

' loads the AzureQueuesStorage element
include('elements/azure/StorageServiceColor/AzureQueuesStorage')
AzureQueuesStorage('element', 'Queues Storage', 'an optional tech field')
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

' loads the AzureQueuesStorage card
include('elements/azure/StorageServiceColor/AzureQueuesStorage')
AzureQueuesStorageCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureQueuesStorage card
include('elements/azure/StorageServiceColor/AzureQueuesStorage')
AzureQueuesStorageCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
