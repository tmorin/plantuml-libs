# AzureMetrics
```text
elements/azure/ManagementAndGovernanceServiceColor/AzureMetrics
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureMetrics icon](../../../icons/azure/ManagementAndGovernanceServiceColor/AzureMetrics.png) | ![AzureMetrics element](AzureMetrics.element.png) | ![AzureMetrics card](AzureMetrics.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/azure')

' loads the AzureMetrics element
include('elements/azure/ManagementAndGovernanceServiceColor/AzureMetrics')
AzureMetrics('element', 'Metrics', 'an optional tech field')
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

' loads the style
include('styles/azure')

' loads the AzureMetrics element
include('elements/azure/ManagementAndGovernanceServiceColor/AzureMetrics')
AzureMetrics('element', 'Metrics', 'an optional tech field')
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

' loads the style
include('styles/azure')

' loads the AzureMetrics card
include('elements/azure/ManagementAndGovernanceServiceColor/AzureMetrics')
AzureMetricsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the style
include('styles/azure')

' loads the AzureMetrics card
include('elements/azure/ManagementAndGovernanceServiceColor/AzureMetrics')
AzureMetricsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
