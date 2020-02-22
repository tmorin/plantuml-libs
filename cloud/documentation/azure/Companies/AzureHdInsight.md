# AzureHdInsight
```text
elements/azure/Companies/AzureHdInsight
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureHdInsight icon](../../../icons/azure/Companies/AzureHdInsight.png) | ![AzureHdInsight element](AzureHdInsight.element.png) | ![AzureHdInsight card](AzureHdInsight.card.png) |
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

' loads the AzureHdInsight element
include('elements/azure/Companies/AzureHdInsight')
AzureHdInsight('element', 'Hd Insight', 'an optional tech field')
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

' loads the AzureHdInsight element
include('elements/azure/Companies/AzureHdInsight')
AzureHdInsight('element', 'Hd Insight', 'an optional tech field')
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

' loads the AzureHdInsight card
include('elements/azure/Companies/AzureHdInsight')
AzureHdInsightCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureHdInsight card
include('elements/azure/Companies/AzureHdInsight')
AzureHdInsightCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
