# AzureAnalysisServices
```text
elements/azure/AnalyticsServiceColor/AzureAnalysisServices
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureAnalysisServices icon](../../../icons/azure/AnalyticsServiceColor/AzureAnalysisServices.png) | ![AzureAnalysisServices element](AzureAnalysisServices.element.png) | ![AzureAnalysisServices card](AzureAnalysisServices.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="v1.x"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/azure')

' loads the AzureAnalysisServices element
include('elements/azure/AnalyticsServiceColor/AzureAnalysisServices')
AzureAnalysisServices('element', 'Analysis Services', 'an optional tech field')
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

' loads the AzureAnalysisServices element
include('elements/azure/AnalyticsServiceColor/AzureAnalysisServices')
AzureAnalysisServices('element', 'Analysis Services', 'an optional tech field')
@enduml
```
## Card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="v1.x"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/azure')

' loads the AzureAnalysisServices card
include('elements/azure/AnalyticsServiceColor/AzureAnalysisServices')
AzureAnalysisServicesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureAnalysisServices card
include('elements/azure/AnalyticsServiceColor/AzureAnalysisServices')
AzureAnalysisServicesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
