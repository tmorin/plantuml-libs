# AzureManagementConsole
```text
elements/azure/FlatSymbols/CneEnterprise/AzureManagementConsole
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureManagementConsole icon](../../../../icons/azure/FlatSymbols/CneEnterprise/AzureManagementConsole.png) | ![AzureManagementConsole element](AzureManagementConsole.element.png) | ![AzureManagementConsole card](AzureManagementConsole.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the AWS style
include('styles/aws')

' loads the AzureManagementConsole element
include('elements/azure/FlatSymbols/CneEnterprise/AzureManagementConsole')
AzureManagementConsole('element', 'Management Console', 'an optional tech field')
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

' loads the AWS style
include('styles/aws')

' loads the AzureManagementConsole element
include('elements/azure/FlatSymbols/CneEnterprise/AzureManagementConsole')
AzureManagementConsole('element', 'Management Console', 'an optional tech field')
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

' loads the AWS style
include('styles/gcp')

' loads the AzureManagementConsole card
include('elements/azure/FlatSymbols/CneEnterprise/AzureManagementConsole')
AzureManagementConsoleCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GCP style
include('styles/gcp')

' loads the AzureManagementConsole card
include('elements/azure/FlatSymbols/CneEnterprise/AzureManagementConsole')
AzureManagementConsoleCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
