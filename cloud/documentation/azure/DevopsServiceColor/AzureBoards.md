# AzureBoards
```text
elements/azure/DevopsServiceColor/AzureBoards
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureBoards icon](../../../icons/azure/DevopsServiceColor/AzureBoards.png) | ![AzureBoards element](AzureBoards.element.png) | ![AzureBoards card](AzureBoards.card.png) |
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

' loads the AzureBoards element
include('elements/azure/DevopsServiceColor/AzureBoards')
AzureBoards('element', 'Boards', 'an optional tech field')
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

' loads the AzureBoards element
include('elements/azure/DevopsServiceColor/AzureBoards')
AzureBoards('element', 'Boards', 'an optional tech field')
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

' loads the AzureBoards card
include('elements/azure/DevopsServiceColor/AzureBoards')
AzureBoardsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureBoards card
include('elements/azure/DevopsServiceColor/AzureBoards')
AzureBoardsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
