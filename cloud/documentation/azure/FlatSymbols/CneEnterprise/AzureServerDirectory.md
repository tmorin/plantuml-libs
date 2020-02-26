# AzureServerDirectory
```text
elements/azure/FlatSymbols/CneEnterprise/AzureServerDirectory
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureServerDirectory icon](../../../../icons/azure/FlatSymbols/CneEnterprise/AzureServerDirectory.png) | ![AzureServerDirectory element](AzureServerDirectory.element.png) | ![AzureServerDirectory card](AzureServerDirectory.card.png) |
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

' loads the AzureServerDirectory element
include('elements/azure/FlatSymbols/CneEnterprise/AzureServerDirectory')
AzureServerDirectory('element', 'Server Directory', 'an optional tech field')
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

' loads the AzureServerDirectory element
include('elements/azure/FlatSymbols/CneEnterprise/AzureServerDirectory')
AzureServerDirectory('element', 'Server Directory', 'an optional tech field')
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

' loads the AzureServerDirectory card
include('elements/azure/FlatSymbols/CneEnterprise/AzureServerDirectory')
AzureServerDirectoryCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureServerDirectory card
include('elements/azure/FlatSymbols/CneEnterprise/AzureServerDirectory')
AzureServerDirectoryCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
