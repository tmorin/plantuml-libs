# AzureAccountPortal
```text
elements/azure/FlatSymbols/CneIntune/AzureAccountPortal
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureAccountPortal icon](../../../../icons/azure/FlatSymbols/CneIntune/AzureAccountPortal.png) | ![AzureAccountPortal element](AzureAccountPortal.element.png) | ![AzureAccountPortal card](AzureAccountPortal.card.png) |
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

' loads the AzureAccountPortal element
include('elements/azure/FlatSymbols/CneIntune/AzureAccountPortal')
AzureAccountPortal('element', 'Account Portal', 'an optional tech field')
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

' loads the AzureAccountPortal element
include('elements/azure/FlatSymbols/CneIntune/AzureAccountPortal')
AzureAccountPortal('element', 'Account Portal', 'an optional tech field')
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

' loads the AzureAccountPortal card
include('elements/azure/FlatSymbols/CneIntune/AzureAccountPortal')
AzureAccountPortalCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureAccountPortal card
include('elements/azure/FlatSymbols/CneIntune/AzureAccountPortal')
AzureAccountPortalCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
