# AzureCompanyPortal
```text
elements/azure/FlatSymbols/CneIntune/AzureCompanyPortal
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureCompanyPortal icon](../../../../icons/azure/FlatSymbols/CneIntune/AzureCompanyPortal.png) | ![AzureCompanyPortal element](AzureCompanyPortal.element.png) | ![AzureCompanyPortal card](AzureCompanyPortal.card.png) |
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

' loads the AzureCompanyPortal element
include('elements/azure/FlatSymbols/CneIntune/AzureCompanyPortal')
AzureCompanyPortal('element', 'Company Portal', 'an optional tech field')
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

' loads the AzureCompanyPortal element
include('elements/azure/FlatSymbols/CneIntune/AzureCompanyPortal')
AzureCompanyPortal('element', 'Company Portal', 'an optional tech field')
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

' loads the AzureCompanyPortal card
include('elements/azure/FlatSymbols/CneIntune/AzureCompanyPortal')
AzureCompanyPortalCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureCompanyPortal card
include('elements/azure/FlatSymbols/CneIntune/AzureCompanyPortal')
AzureCompanyPortalCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
