# AzureRouter
```text
elements/azure/FlatSymbols/CneEnterprise/AzureRouter
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureRouter icon](../../../../icons/azure/FlatSymbols/CneEnterprise/AzureRouter.png) | ![AzureRouter element](AzureRouter.element.png) | ![AzureRouter card](AzureRouter.card.png) |
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

' loads the AzureRouter element
include('elements/azure/FlatSymbols/CneEnterprise/AzureRouter')
AzureRouter('element', 'Router', 'an optional tech field')
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

' loads the AzureRouter element
include('elements/azure/FlatSymbols/CneEnterprise/AzureRouter')
AzureRouter('element', 'Router', 'an optional tech field')
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

' loads the AzureRouter card
include('elements/azure/FlatSymbols/CneEnterprise/AzureRouter')
AzureRouterCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureRouter card
include('elements/azure/FlatSymbols/CneEnterprise/AzureRouter')
AzureRouterCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
