# AzureAppServiceDomains
```text
elements/azure/WebServiceColor/AzureAppServiceDomains
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureAppServiceDomains icon](../../../icons/azure/WebServiceColor/AzureAppServiceDomains.png) | ![AzureAppServiceDomains element](AzureAppServiceDomains.element.png) | ![AzureAppServiceDomains card](AzureAppServiceDomains.card.png) |
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

' loads the AzureAppServiceDomains element
include('elements/azure/WebServiceColor/AzureAppServiceDomains')
AzureAppServiceDomains('element', 'App Service Domains', 'an optional tech field')
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

' loads the AzureAppServiceDomains element
include('elements/azure/WebServiceColor/AzureAppServiceDomains')
AzureAppServiceDomains('element', 'App Service Domains', 'an optional tech field')
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

' loads the AzureAppServiceDomains card
include('elements/azure/WebServiceColor/AzureAppServiceDomains')
AzureAppServiceDomainsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureAppServiceDomains card
include('elements/azure/WebServiceColor/AzureAppServiceDomains')
AzureAppServiceDomainsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
