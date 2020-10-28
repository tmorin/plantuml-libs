# AzureStreamAnalyticsJobs
```text
elements/azure/AnalyticsServiceColor/AzureStreamAnalyticsJobs
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureStreamAnalyticsJobs icon](../../../icons/azure/AnalyticsServiceColor/AzureStreamAnalyticsJobs.png) | ![AzureStreamAnalyticsJobs element](AzureStreamAnalyticsJobs.element.png) | ![AzureStreamAnalyticsJobs card](AzureStreamAnalyticsJobs.card.png) |
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

' loads the AzureStreamAnalyticsJobs element
include('elements/azure/AnalyticsServiceColor/AzureStreamAnalyticsJobs')
AzureStreamAnalyticsJobs('element', 'Stream Analytics Jobs', 'an optional tech field')
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

' loads the AzureStreamAnalyticsJobs element
include('elements/azure/AnalyticsServiceColor/AzureStreamAnalyticsJobs')
AzureStreamAnalyticsJobs('element', 'Stream Analytics Jobs', 'an optional tech field')
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

' loads the AzureStreamAnalyticsJobs card
include('elements/azure/AnalyticsServiceColor/AzureStreamAnalyticsJobs')
AzureStreamAnalyticsJobsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureStreamAnalyticsJobs card
include('elements/azure/AnalyticsServiceColor/AzureStreamAnalyticsJobs')
AzureStreamAnalyticsJobsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
