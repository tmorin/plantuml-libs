# AzureHealthy
```text
elements/azure/FlatSymbols/CneEnterprise/AzureHealthy
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureHealthy icon](../../../../icons/azure/FlatSymbols/CneEnterprise/AzureHealthy.png) | ![AzureHealthy element](AzureHealthy.element.png) | ![AzureHealthy card](AzureHealthy.card.png) |
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

' loads the AzureHealthy element
include('elements/azure/FlatSymbols/CneEnterprise/AzureHealthy')
AzureHealthy('element', 'Healthy', 'an optional tech field')
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

' loads the AzureHealthy element
include('elements/azure/FlatSymbols/CneEnterprise/AzureHealthy')
AzureHealthy('element', 'Healthy', 'an optional tech field')
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

' loads the AzureHealthy card
include('elements/azure/FlatSymbols/CneEnterprise/AzureHealthy')
AzureHealthyCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureHealthy card
include('elements/azure/FlatSymbols/CneEnterprise/AzureHealthy')
AzureHealthyCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
