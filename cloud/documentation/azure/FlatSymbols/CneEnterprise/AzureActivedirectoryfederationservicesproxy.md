# AzureActivedirectoryfederationservicesproxy
```text
elements/azure/FlatSymbols/CneEnterprise/AzureActivedirectoryfederationservicesproxy
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureActivedirectoryfederationservicesproxy icon](../../../../icons/azure/FlatSymbols/CneEnterprise/AzureActivedirectoryfederationservicesproxy.png) | ![AzureActivedirectoryfederationservicesproxy element](AzureActivedirectoryfederationservicesproxy.element.png) | ![AzureActivedirectoryfederationservicesproxy card](AzureActivedirectoryfederationservicesproxy.card.png) |
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

' loads the AzureActivedirectoryfederationservicesproxy element
include('elements/azure/FlatSymbols/CneEnterprise/AzureActivedirectoryfederationservicesproxy')
AzureActivedirectoryfederationservicesproxy('element', 'Activedirectoryfederationservicesproxy', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../../../"

' loads the library
!include ../../../../library.puml

' loads the AWS style
include('styles/aws')

' loads the AzureActivedirectoryfederationservicesproxy element
include('elements/azure/FlatSymbols/CneEnterprise/AzureActivedirectoryfederationservicesproxy')
AzureActivedirectoryfederationservicesproxy('element', 'Activedirectoryfederationservicesproxy', 'an optional tech field')
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

' loads the AzureActivedirectoryfederationservicesproxy card
include('elements/azure/FlatSymbols/CneEnterprise/AzureActivedirectoryfederationservicesproxy')
AzureActivedirectoryfederationservicesproxyCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../../../"

' loads the library
!include ../../../../library.puml

' loads the GCP style
include('styles/gcp')

' loads the AzureActivedirectoryfederationservicesproxy card
include('elements/azure/FlatSymbols/CneEnterprise/AzureActivedirectoryfederationservicesproxy')
AzureActivedirectoryfederationservicesproxyCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
