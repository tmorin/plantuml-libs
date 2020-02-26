# AzurePrimarySite
```text
elements/azure/FlatSymbols/CneSystemCenter/AzurePrimarySite
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzurePrimarySite icon](../../../../icons/azure/FlatSymbols/CneSystemCenter/AzurePrimarySite.png) | ![AzurePrimarySite element](AzurePrimarySite.element.png) | ![AzurePrimarySite card](AzurePrimarySite.card.png) |
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

' loads the AzurePrimarySite element
include('elements/azure/FlatSymbols/CneSystemCenter/AzurePrimarySite')
AzurePrimarySite('element', 'Primary Site', 'an optional tech field')
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

' loads the AzurePrimarySite element
include('elements/azure/FlatSymbols/CneSystemCenter/AzurePrimarySite')
AzurePrimarySite('element', 'Primary Site', 'an optional tech field')
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

' loads the AzurePrimarySite card
include('elements/azure/FlatSymbols/CneSystemCenter/AzurePrimarySite')
AzurePrimarySiteCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzurePrimarySite card
include('elements/azure/FlatSymbols/CneSystemCenter/AzurePrimarySite')
AzurePrimarySiteCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
