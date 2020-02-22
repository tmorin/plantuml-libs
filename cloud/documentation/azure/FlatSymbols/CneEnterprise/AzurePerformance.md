# AzurePerformance
```text
elements/azure/FlatSymbols/CneEnterprise/AzurePerformance
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzurePerformance icon](../../../../icons/azure/FlatSymbols/CneEnterprise/AzurePerformance.png) | ![AzurePerformance element](AzurePerformance.element.png) | ![AzurePerformance card](AzurePerformance.card.png) |
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

' loads the AzurePerformance element
include('elements/azure/FlatSymbols/CneEnterprise/AzurePerformance')
AzurePerformance('element', 'Performance', 'an optional tech field')
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

' loads the AzurePerformance element
include('elements/azure/FlatSymbols/CneEnterprise/AzurePerformance')
AzurePerformance('element', 'Performance', 'an optional tech field')
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

' loads the AzurePerformance card
include('elements/azure/FlatSymbols/CneEnterprise/AzurePerformance')
AzurePerformanceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzurePerformance card
include('elements/azure/FlatSymbols/CneEnterprise/AzurePerformance')
AzurePerformanceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
