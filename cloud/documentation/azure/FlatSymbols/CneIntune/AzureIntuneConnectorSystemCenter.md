# AzureIntuneConnectorSystemCenter
```text
elements/azure/FlatSymbols/CneIntune/AzureIntuneConnectorSystemCenter
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureIntuneConnectorSystemCenter icon](../../../../icons/azure/FlatSymbols/CneIntune/AzureIntuneConnectorSystemCenter.png) | ![AzureIntuneConnectorSystemCenter element](AzureIntuneConnectorSystemCenter.element.png) | ![AzureIntuneConnectorSystemCenter card](AzureIntuneConnectorSystemCenter.card.png) |
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

' loads the AzureIntuneConnectorSystemCenter element
include('elements/azure/FlatSymbols/CneIntune/AzureIntuneConnectorSystemCenter')
AzureIntuneConnectorSystemCenter('element', 'Intune Connector System Center', 'an optional tech field')
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

' loads the AzureIntuneConnectorSystemCenter element
include('elements/azure/FlatSymbols/CneIntune/AzureIntuneConnectorSystemCenter')
AzureIntuneConnectorSystemCenter('element', 'Intune Connector System Center', 'an optional tech field')
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

' loads the AzureIntuneConnectorSystemCenter card
include('elements/azure/FlatSymbols/CneIntune/AzureIntuneConnectorSystemCenter')
AzureIntuneConnectorSystemCenterCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureIntuneConnectorSystemCenter card
include('elements/azure/FlatSymbols/CneIntune/AzureIntuneConnectorSystemCenter')
AzureIntuneConnectorSystemCenterCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
