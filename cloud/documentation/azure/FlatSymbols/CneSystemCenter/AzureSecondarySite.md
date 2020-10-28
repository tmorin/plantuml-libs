# AzureSecondarySite
```text
elements/azure/FlatSymbols/CneSystemCenter/AzureSecondarySite
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureSecondarySite icon](../../../../icons/azure/FlatSymbols/CneSystemCenter/AzureSecondarySite.png) | ![AzureSecondarySite element](AzureSecondarySite.element.png) | ![AzureSecondarySite card](AzureSecondarySite.card.png) |
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

' loads the AzureSecondarySite element
include('elements/azure/FlatSymbols/CneSystemCenter/AzureSecondarySite')
AzureSecondarySite('element', 'Secondary Site', 'an optional tech field')
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

' loads the AzureSecondarySite element
include('elements/azure/FlatSymbols/CneSystemCenter/AzureSecondarySite')
AzureSecondarySite('element', 'Secondary Site', 'an optional tech field')
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

' loads the AzureSecondarySite card
include('elements/azure/FlatSymbols/CneSystemCenter/AzureSecondarySite')
AzureSecondarySiteCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureSecondarySite card
include('elements/azure/FlatSymbols/CneSystemCenter/AzureSecondarySite')
AzureSecondarySiteCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
