# AzureEventGridDomains
```text
elements/azure/IntegrationServiceColor/AzureEventGridDomains
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureEventGridDomains icon](../../../icons/azure/IntegrationServiceColor/AzureEventGridDomains.png) | ![AzureEventGridDomains element](AzureEventGridDomains.element.png) | ![AzureEventGridDomains card](AzureEventGridDomains.card.png) |
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

' loads the AzureEventGridDomains element
include('elements/azure/IntegrationServiceColor/AzureEventGridDomains')
AzureEventGridDomains('element', 'Event Grid Domains', 'an optional tech field')
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

' loads the AzureEventGridDomains element
include('elements/azure/IntegrationServiceColor/AzureEventGridDomains')
AzureEventGridDomains('element', 'Event Grid Domains', 'an optional tech field')
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

' loads the AzureEventGridDomains card
include('elements/azure/IntegrationServiceColor/AzureEventGridDomains')
AzureEventGridDomainsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureEventGridDomains card
include('elements/azure/IntegrationServiceColor/AzureEventGridDomains')
AzureEventGridDomainsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
