# AzureEventHubs
```text
elements/azure/AnalyticsServiceColor/AzureEventHubs
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureEventHubs icon](../../../icons/azure/AnalyticsServiceColor/AzureEventHubs.png) | ![AzureEventHubs element](AzureEventHubs.element.png) | ![AzureEventHubs card](AzureEventHubs.card.png) |
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

' loads the AzureEventHubs element
include('elements/azure/AnalyticsServiceColor/AzureEventHubs')
AzureEventHubs('element', 'Event Hubs', 'an optional tech field')
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

' loads the AWS style
include('styles/aws')

' loads the AzureEventHubs element
include('elements/azure/AnalyticsServiceColor/AzureEventHubs')
AzureEventHubs('element', 'Event Hubs', 'an optional tech field')
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

' loads the AzureEventHubs card
include('elements/azure/AnalyticsServiceColor/AzureEventHubs')
AzureEventHubsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GCP style
include('styles/gcp')

' loads the AzureEventHubs card
include('elements/azure/AnalyticsServiceColor/AzureEventHubs')
AzureEventHubsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
