# AzureDashboard
```text
elements/azure/FlatSymbols/CneIntune/AzureDashboard
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureDashboard icon](../../../../icons/azure/FlatSymbols/CneIntune/AzureDashboard.png) | ![AzureDashboard element](AzureDashboard.element.png) | ![AzureDashboard card](AzureDashboard.card.png) |
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

' loads the AzureDashboard element
include('elements/azure/FlatSymbols/CneIntune/AzureDashboard')
AzureDashboard('element', 'Dashboard', 'an optional tech field')
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

' loads the AzureDashboard element
include('elements/azure/FlatSymbols/CneIntune/AzureDashboard')
AzureDashboard('element', 'Dashboard', 'an optional tech field')
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

' loads the AzureDashboard card
include('elements/azure/FlatSymbols/CneIntune/AzureDashboard')
AzureDashboardCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureDashboard card
include('elements/azure/FlatSymbols/CneIntune/AzureDashboard')
AzureDashboardCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
