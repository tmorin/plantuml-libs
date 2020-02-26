# AzureAppServiceCertificates
```text
elements/azure/WebServiceColor/AzureAppServiceCertificates
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureAppServiceCertificates icon](../../../icons/azure/WebServiceColor/AzureAppServiceCertificates.png) | ![AzureAppServiceCertificates element](AzureAppServiceCertificates.element.png) | ![AzureAppServiceCertificates card](AzureAppServiceCertificates.card.png) |
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

' loads the AzureAppServiceCertificates element
include('elements/azure/WebServiceColor/AzureAppServiceCertificates')
AzureAppServiceCertificates('element', 'App Service Certificates', 'an optional tech field')
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

' loads the AzureAppServiceCertificates element
include('elements/azure/WebServiceColor/AzureAppServiceCertificates')
AzureAppServiceCertificates('element', 'App Service Certificates', 'an optional tech field')
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

' loads the AzureAppServiceCertificates card
include('elements/azure/WebServiceColor/AzureAppServiceCertificates')
AzureAppServiceCertificatesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureAppServiceCertificates card
include('elements/azure/WebServiceColor/AzureAppServiceCertificates')
AzureAppServiceCertificatesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
