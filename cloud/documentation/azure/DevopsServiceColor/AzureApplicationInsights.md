# AzureApplicationInsights
```text
elements/azure/DevopsServiceColor/AzureApplicationInsights
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureApplicationInsights icon](../../../icons/azure/DevopsServiceColor/AzureApplicationInsights.png) | ![AzureApplicationInsights element](AzureApplicationInsights.element.png) | ![AzureApplicationInsights card](AzureApplicationInsights.card.png) |
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

' loads the AzureApplicationInsights element
include('elements/azure/DevopsServiceColor/AzureApplicationInsights')
AzureApplicationInsights('element', 'Application Insights', 'an optional tech field')
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

' loads the AzureApplicationInsights element
include('elements/azure/DevopsServiceColor/AzureApplicationInsights')
AzureApplicationInsights('element', 'Application Insights', 'an optional tech field')
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

' loads the AzureApplicationInsights card
include('elements/azure/DevopsServiceColor/AzureApplicationInsights')
AzureApplicationInsightsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureApplicationInsights card
include('elements/azure/DevopsServiceColor/AzureApplicationInsights')
AzureApplicationInsightsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
