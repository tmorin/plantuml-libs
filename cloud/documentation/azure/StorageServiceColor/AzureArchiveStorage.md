# AzureArchiveStorage
```text
elements/azure/StorageServiceColor/AzureArchiveStorage
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureArchiveStorage icon](../../../icons/azure/StorageServiceColor/AzureArchiveStorage.png) | ![AzureArchiveStorage element](AzureArchiveStorage.element.png) | ![AzureArchiveStorage card](AzureArchiveStorage.card.png) |
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

' loads the AzureArchiveStorage element
include('elements/azure/StorageServiceColor/AzureArchiveStorage')
AzureArchiveStorage('element', 'Archive Storage', 'an optional tech field')
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

' loads the AzureArchiveStorage element
include('elements/azure/StorageServiceColor/AzureArchiveStorage')
AzureArchiveStorage('element', 'Archive Storage', 'an optional tech field')
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

' loads the AzureArchiveStorage card
include('elements/azure/StorageServiceColor/AzureArchiveStorage')
AzureArchiveStorageCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureArchiveStorage card
include('elements/azure/StorageServiceColor/AzureArchiveStorage')
AzureArchiveStorageCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
