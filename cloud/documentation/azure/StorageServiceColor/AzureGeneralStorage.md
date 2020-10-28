# AzureGeneralStorage
```text
elements/azure/StorageServiceColor/AzureGeneralStorage
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureGeneralStorage icon](../../../icons/azure/StorageServiceColor/AzureGeneralStorage.png) | ![AzureGeneralStorage element](AzureGeneralStorage.element.png) | ![AzureGeneralStorage card](AzureGeneralStorage.card.png) |
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

' loads the AzureGeneralStorage element
include('elements/azure/StorageServiceColor/AzureGeneralStorage')
AzureGeneralStorage('element', 'General Storage', 'an optional tech field')
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

' loads the AzureGeneralStorage element
include('elements/azure/StorageServiceColor/AzureGeneralStorage')
AzureGeneralStorage('element', 'General Storage', 'an optional tech field')
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

' loads the AzureGeneralStorage card
include('elements/azure/StorageServiceColor/AzureGeneralStorage')
AzureGeneralStorageCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureGeneralStorage card
include('elements/azure/StorageServiceColor/AzureGeneralStorage')
AzureGeneralStorageCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
