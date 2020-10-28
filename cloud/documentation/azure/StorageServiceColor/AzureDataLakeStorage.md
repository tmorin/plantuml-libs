# AzureDataLakeStorage
```text
elements/azure/StorageServiceColor/AzureDataLakeStorage
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureDataLakeStorage icon](../../../icons/azure/StorageServiceColor/AzureDataLakeStorage.png) | ![AzureDataLakeStorage element](AzureDataLakeStorage.element.png) | ![AzureDataLakeStorage card](AzureDataLakeStorage.card.png) |
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

' loads the AzureDataLakeStorage element
include('elements/azure/StorageServiceColor/AzureDataLakeStorage')
AzureDataLakeStorage('element', 'Data Lake Storage', 'an optional tech field')
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

' loads the AzureDataLakeStorage element
include('elements/azure/StorageServiceColor/AzureDataLakeStorage')
AzureDataLakeStorage('element', 'Data Lake Storage', 'an optional tech field')
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

' loads the AzureDataLakeStorage card
include('elements/azure/StorageServiceColor/AzureDataLakeStorage')
AzureDataLakeStorageCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureDataLakeStorage card
include('elements/azure/StorageServiceColor/AzureDataLakeStorage')
AzureDataLakeStorageCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
