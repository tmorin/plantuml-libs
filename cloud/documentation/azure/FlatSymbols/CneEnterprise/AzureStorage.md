# AzureStorage
```text
elements/azure/FlatSymbols/CneEnterprise/AzureStorage
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureStorage icon](../../../../icons/azure/FlatSymbols/CneEnterprise/AzureStorage.png) | ![AzureStorage element](AzureStorage.element.png) | ![AzureStorage card](AzureStorage.card.png) |
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

' loads the AzureStorage element
include('elements/azure/FlatSymbols/CneEnterprise/AzureStorage')
AzureStorage('element', 'Storage', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../../../"

' loads the library
!include ../../../../library.puml

' loads the style
include('styles/azure')

' loads the AzureStorage element
include('elements/azure/FlatSymbols/CneEnterprise/AzureStorage')
AzureStorage('element', 'Storage', 'an optional tech field')
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

' loads the AzureStorage card
include('elements/azure/FlatSymbols/CneEnterprise/AzureStorage')
AzureStorageCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../../../"

' loads the library
!include ../../../../library.puml

' loads the style
include('styles/azure')

' loads the AzureStorage card
include('elements/azure/FlatSymbols/CneEnterprise/AzureStorage')
AzureStorageCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
