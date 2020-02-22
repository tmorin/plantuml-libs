# AzureClientSoftwareDeploymentWizard
```text
elements/azure/FlatSymbols/CneIntune/AzureClientSoftwareDeploymentWizard
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureClientSoftwareDeploymentWizard icon](../../../../icons/azure/FlatSymbols/CneIntune/AzureClientSoftwareDeploymentWizard.png) | ![AzureClientSoftwareDeploymentWizard element](AzureClientSoftwareDeploymentWizard.element.png) | ![AzureClientSoftwareDeploymentWizard card](AzureClientSoftwareDeploymentWizard.card.png) |
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

' loads the AzureClientSoftwareDeploymentWizard element
include('elements/azure/FlatSymbols/CneIntune/AzureClientSoftwareDeploymentWizard')
AzureClientSoftwareDeploymentWizard('element', 'Client Software Deployment Wizard', 'an optional tech field')
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

' loads the AzureClientSoftwareDeploymentWizard element
include('elements/azure/FlatSymbols/CneIntune/AzureClientSoftwareDeploymentWizard')
AzureClientSoftwareDeploymentWizard('element', 'Client Software Deployment Wizard', 'an optional tech field')
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

' loads the AzureClientSoftwareDeploymentWizard card
include('elements/azure/FlatSymbols/CneIntune/AzureClientSoftwareDeploymentWizard')
AzureClientSoftwareDeploymentWizardCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureClientSoftwareDeploymentWizard card
include('elements/azure/FlatSymbols/CneIntune/AzureClientSoftwareDeploymentWizard')
AzureClientSoftwareDeploymentWizardCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
