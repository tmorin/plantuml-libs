# AzureDataLakeAnalytics
```text
elements/azure/AnalyticsServiceColor/AzureDataLakeAnalytics
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureDataLakeAnalytics icon](../../../icons/azure/AnalyticsServiceColor/AzureDataLakeAnalytics.png) | ![AzureDataLakeAnalytics element](AzureDataLakeAnalytics.element.png) | ![AzureDataLakeAnalytics card](AzureDataLakeAnalytics.card.png) |
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

' loads the AzureDataLakeAnalytics element
include('elements/azure/AnalyticsServiceColor/AzureDataLakeAnalytics')
AzureDataLakeAnalytics('element', 'Data Lake Analytics', 'an optional tech field')
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

' loads the AzureDataLakeAnalytics element
include('elements/azure/AnalyticsServiceColor/AzureDataLakeAnalytics')
AzureDataLakeAnalytics('element', 'Data Lake Analytics', 'an optional tech field')
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

' loads the AzureDataLakeAnalytics card
include('elements/azure/AnalyticsServiceColor/AzureDataLakeAnalytics')
AzureDataLakeAnalyticsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureDataLakeAnalytics card
include('elements/azure/AnalyticsServiceColor/AzureDataLakeAnalytics')
AzureDataLakeAnalyticsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
