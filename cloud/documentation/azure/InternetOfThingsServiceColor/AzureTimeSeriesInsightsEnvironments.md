# AzureTimeSeriesInsightsEnvironments
```text
elements/azure/InternetOfThingsServiceColor/AzureTimeSeriesInsightsEnvironments
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureTimeSeriesInsightsEnvironments icon](../../../icons/azure/InternetOfThingsServiceColor/AzureTimeSeriesInsightsEnvironments.png) | ![AzureTimeSeriesInsightsEnvironments element](AzureTimeSeriesInsightsEnvironments.element.png) | ![AzureTimeSeriesInsightsEnvironments card](AzureTimeSeriesInsightsEnvironments.card.png) |
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

' loads the AzureTimeSeriesInsightsEnvironments element
include('elements/azure/InternetOfThingsServiceColor/AzureTimeSeriesInsightsEnvironments')
AzureTimeSeriesInsightsEnvironments('element', 'Time Series Insights Environments', 'an optional tech field')
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

' loads the AzureTimeSeriesInsightsEnvironments element
include('elements/azure/InternetOfThingsServiceColor/AzureTimeSeriesInsightsEnvironments')
AzureTimeSeriesInsightsEnvironments('element', 'Time Series Insights Environments', 'an optional tech field')
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

' loads the AzureTimeSeriesInsightsEnvironments card
include('elements/azure/InternetOfThingsServiceColor/AzureTimeSeriesInsightsEnvironments')
AzureTimeSeriesInsightsEnvironmentsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureTimeSeriesInsightsEnvironments card
include('elements/azure/InternetOfThingsServiceColor/AzureTimeSeriesInsightsEnvironments')
AzureTimeSeriesInsightsEnvironmentsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
