# AzureSystemCenterAdminConsole
```text
elements/azure/FlatSymbols/CneSystemCenter/AzureSystemCenterAdminConsole
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureSystemCenterAdminConsole icon](../../../../icons/azure/FlatSymbols/CneSystemCenter/AzureSystemCenterAdminConsole.png) | ![AzureSystemCenterAdminConsole element](AzureSystemCenterAdminConsole.element.png) | ![AzureSystemCenterAdminConsole card](AzureSystemCenterAdminConsole.card.png) |
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

' loads the AzureSystemCenterAdminConsole element
include('elements/azure/FlatSymbols/CneSystemCenter/AzureSystemCenterAdminConsole')
AzureSystemCenterAdminConsole('element', 'System Center Admin Console', 'an optional tech field')
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

' loads the AzureSystemCenterAdminConsole element
include('elements/azure/FlatSymbols/CneSystemCenter/AzureSystemCenterAdminConsole')
AzureSystemCenterAdminConsole('element', 'System Center Admin Console', 'an optional tech field')
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

' loads the AzureSystemCenterAdminConsole card
include('elements/azure/FlatSymbols/CneSystemCenter/AzureSystemCenterAdminConsole')
AzureSystemCenterAdminConsoleCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureSystemCenterAdminConsole card
include('elements/azure/FlatSymbols/CneSystemCenter/AzureSystemCenterAdminConsole')
AzureSystemCenterAdminConsoleCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
