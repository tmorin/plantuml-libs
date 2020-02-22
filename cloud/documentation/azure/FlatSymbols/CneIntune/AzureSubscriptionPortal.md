# AzureSubscriptionPortal
```text
elements/azure/FlatSymbols/CneIntune/AzureSubscriptionPortal
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureSubscriptionPortal icon](../../../../icons/azure/FlatSymbols/CneIntune/AzureSubscriptionPortal.png) | ![AzureSubscriptionPortal element](AzureSubscriptionPortal.element.png) | ![AzureSubscriptionPortal card](AzureSubscriptionPortal.card.png) |
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

' loads the AzureSubscriptionPortal element
include('elements/azure/FlatSymbols/CneIntune/AzureSubscriptionPortal')
AzureSubscriptionPortal('element', 'Subscription Portal', 'an optional tech field')
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

' loads the AzureSubscriptionPortal element
include('elements/azure/FlatSymbols/CneIntune/AzureSubscriptionPortal')
AzureSubscriptionPortal('element', 'Subscription Portal', 'an optional tech field')
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

' loads the AzureSubscriptionPortal card
include('elements/azure/FlatSymbols/CneIntune/AzureSubscriptionPortal')
AzureSubscriptionPortalCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureSubscriptionPortal card
include('elements/azure/FlatSymbols/CneIntune/AzureSubscriptionPortal')
AzureSubscriptionPortalCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
