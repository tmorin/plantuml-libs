# AzureAdDomainServices
```text
elements/azure/IdentityServiceColor/AzureAdDomainServices
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureAdDomainServices icon](../../../icons/azure/IdentityServiceColor/AzureAdDomainServices.png) | ![AzureAdDomainServices element](AzureAdDomainServices.element.png) | ![AzureAdDomainServices card](AzureAdDomainServices.card.png) |
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

' loads the AzureAdDomainServices element
include('elements/azure/IdentityServiceColor/AzureAdDomainServices')
AzureAdDomainServices('element', 'Ad Domain Services', 'an optional tech field')
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

' loads the AzureAdDomainServices element
include('elements/azure/IdentityServiceColor/AzureAdDomainServices')
AzureAdDomainServices('element', 'Ad Domain Services', 'an optional tech field')
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

' loads the AzureAdDomainServices card
include('elements/azure/IdentityServiceColor/AzureAdDomainServices')
AzureAdDomainServicesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureAdDomainServices card
include('elements/azure/IdentityServiceColor/AzureAdDomainServices')
AzureAdDomainServicesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
