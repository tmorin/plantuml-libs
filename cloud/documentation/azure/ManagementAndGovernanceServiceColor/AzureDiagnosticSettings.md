# AzureDiagnosticSettings
```text
elements/azure/ManagementAndGovernanceServiceColor/AzureDiagnosticSettings
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureDiagnosticSettings icon](../../../icons/azure/ManagementAndGovernanceServiceColor/AzureDiagnosticSettings.png) | ![AzureDiagnosticSettings element](AzureDiagnosticSettings.element.png) | ![AzureDiagnosticSettings card](AzureDiagnosticSettings.card.png) |
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

' loads the AzureDiagnosticSettings element
include('elements/azure/ManagementAndGovernanceServiceColor/AzureDiagnosticSettings')
AzureDiagnosticSettings('element', 'Diagnostic Settings', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../../"

' loads the library
!include ../../../library.puml

' loads the AWS style
include('styles/aws')

' loads the AzureDiagnosticSettings element
include('elements/azure/ManagementAndGovernanceServiceColor/AzureDiagnosticSettings')
AzureDiagnosticSettings('element', 'Diagnostic Settings', 'an optional tech field')
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

' loads the AzureDiagnosticSettings card
include('elements/azure/ManagementAndGovernanceServiceColor/AzureDiagnosticSettings')
AzureDiagnosticSettingsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../../"

' loads the library
!include ../../../library.puml

' loads the GCP style
include('styles/gcp')

' loads the AzureDiagnosticSettings card
include('elements/azure/ManagementAndGovernanceServiceColor/AzureDiagnosticSettings')
AzureDiagnosticSettingsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
