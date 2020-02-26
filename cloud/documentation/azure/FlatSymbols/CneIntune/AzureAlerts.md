# AzureAlerts
```text
elements/azure/FlatSymbols/CneIntune/AzureAlerts
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureAlerts icon](../../../../icons/azure/FlatSymbols/CneIntune/AzureAlerts.png) | ![AzureAlerts element](AzureAlerts.element.png) | ![AzureAlerts card](AzureAlerts.card.png) |
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

' loads the AzureAlerts element
include('elements/azure/FlatSymbols/CneIntune/AzureAlerts')
AzureAlerts('element', 'Alerts', 'an optional tech field')
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

' loads the AzureAlerts element
include('elements/azure/FlatSymbols/CneIntune/AzureAlerts')
AzureAlerts('element', 'Alerts', 'an optional tech field')
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

' loads the AzureAlerts card
include('elements/azure/FlatSymbols/CneIntune/AzureAlerts')
AzureAlertsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureAlerts card
include('elements/azure/FlatSymbols/CneIntune/AzureAlerts')
AzureAlertsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
