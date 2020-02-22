# AzureTableStorage
```text
elements/azure/StorageServiceColor/AzureTableStorage
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureTableStorage icon](../../../icons/azure/StorageServiceColor/AzureTableStorage.png) | ![AzureTableStorage element](AzureTableStorage.element.png) | ![AzureTableStorage card](AzureTableStorage.card.png) |
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

' loads the AzureTableStorage element
include('elements/azure/StorageServiceColor/AzureTableStorage')
AzureTableStorage('element', 'Table Storage', 'an optional tech field')
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

' loads the AzureTableStorage element
include('elements/azure/StorageServiceColor/AzureTableStorage')
AzureTableStorage('element', 'Table Storage', 'an optional tech field')
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

' loads the AzureTableStorage card
include('elements/azure/StorageServiceColor/AzureTableStorage')
AzureTableStorageCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureTableStorage card
include('elements/azure/StorageServiceColor/AzureTableStorage')
AzureTableStorageCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
