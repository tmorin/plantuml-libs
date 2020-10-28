# AzureAdministration
```text
elements/azure/FlatSymbols/CneIntune/AzureAdministration
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureAdministration icon](../../../../icons/azure/FlatSymbols/CneIntune/AzureAdministration.png) | ![AzureAdministration element](AzureAdministration.element.png) | ![AzureAdministration card](AzureAdministration.card.png) |
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

' loads the AzureAdministration element
include('elements/azure/FlatSymbols/CneIntune/AzureAdministration')
AzureAdministration('element', 'Administration', 'an optional tech field')
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

' loads the AzureAdministration element
include('elements/azure/FlatSymbols/CneIntune/AzureAdministration')
AzureAdministration('element', 'Administration', 'an optional tech field')
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

' loads the AzureAdministration card
include('elements/azure/FlatSymbols/CneIntune/AzureAdministration')
AzureAdministrationCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureAdministration card
include('elements/azure/FlatSymbols/CneIntune/AzureAdministration')
AzureAdministrationCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
