# AzureFolder
```text
elements/azure/FlatSymbols/CneGeneralsymbols/AzureFolder
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureFolder icon](../../../../icons/azure/FlatSymbols/CneGeneralsymbols/AzureFolder.png) | ![AzureFolder element](AzureFolder.element.png) | ![AzureFolder card](AzureFolder.card.png) |
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

' loads the AzureFolder element
include('elements/azure/FlatSymbols/CneGeneralsymbols/AzureFolder')
AzureFolder('element', 'Folder', 'an optional tech field')
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

' loads the AzureFolder element
include('elements/azure/FlatSymbols/CneGeneralsymbols/AzureFolder')
AzureFolder('element', 'Folder', 'an optional tech field')
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

' loads the AzureFolder card
include('elements/azure/FlatSymbols/CneGeneralsymbols/AzureFolder')
AzureFolderCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureFolder card
include('elements/azure/FlatSymbols/CneGeneralsymbols/AzureFolder')
AzureFolderCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
