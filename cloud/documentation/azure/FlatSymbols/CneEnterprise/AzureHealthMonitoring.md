# AzureHealthMonitoring
```text
elements/azure/FlatSymbols/CneEnterprise/AzureHealthMonitoring
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureHealthMonitoring icon](../../../../icons/azure/FlatSymbols/CneEnterprise/AzureHealthMonitoring.png) | ![AzureHealthMonitoring element](AzureHealthMonitoring.element.png) | ![AzureHealthMonitoring card](AzureHealthMonitoring.card.png) |
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

' loads the AzureHealthMonitoring element
include('elements/azure/FlatSymbols/CneEnterprise/AzureHealthMonitoring')
AzureHealthMonitoring('element', 'Health Monitoring', 'an optional tech field')
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

' loads the AzureHealthMonitoring element
include('elements/azure/FlatSymbols/CneEnterprise/AzureHealthMonitoring')
AzureHealthMonitoring('element', 'Health Monitoring', 'an optional tech field')
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

' loads the AzureHealthMonitoring card
include('elements/azure/FlatSymbols/CneEnterprise/AzureHealthMonitoring')
AzureHealthMonitoringCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureHealthMonitoring card
include('elements/azure/FlatSymbols/CneEnterprise/AzureHealthMonitoring')
AzureHealthMonitoringCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
