# AzureBlobStorage
```text
elements/azure/DatabasesServiceColor/AzureBlobStorage
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureBlobStorage icon](../../../icons/azure/DatabasesServiceColor/AzureBlobStorage.png) | ![AzureBlobStorage element](AzureBlobStorage.element.png) | ![AzureBlobStorage card](AzureBlobStorage.card.png) |
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

' loads the AzureBlobStorage element
include('elements/azure/DatabasesServiceColor/AzureBlobStorage')
AzureBlobStorage('element', 'Blob Storage', 'an optional tech field')
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

' loads the AzureBlobStorage element
include('elements/azure/DatabasesServiceColor/AzureBlobStorage')
AzureBlobStorage('element', 'Blob Storage', 'an optional tech field')
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

' loads the AzureBlobStorage card
include('elements/azure/DatabasesServiceColor/AzureBlobStorage')
AzureBlobStorageCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureBlobStorage card
include('elements/azure/DatabasesServiceColor/AzureBlobStorage')
AzureBlobStorageCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
