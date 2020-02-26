# AzureElasticJobAgents
```text
elements/azure/DatabasesServiceColor/AzureElasticJobAgents
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureElasticJobAgents icon](../../../icons/azure/DatabasesServiceColor/AzureElasticJobAgents.png) | ![AzureElasticJobAgents element](AzureElasticJobAgents.element.png) | ![AzureElasticJobAgents card](AzureElasticJobAgents.card.png) |
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

' loads the AzureElasticJobAgents element
include('elements/azure/DatabasesServiceColor/AzureElasticJobAgents')
AzureElasticJobAgents('element', 'Elastic Job Agents', 'an optional tech field')
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

' loads the AzureElasticJobAgents element
include('elements/azure/DatabasesServiceColor/AzureElasticJobAgents')
AzureElasticJobAgents('element', 'Elastic Job Agents', 'an optional tech field')
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

' loads the AzureElasticJobAgents card
include('elements/azure/DatabasesServiceColor/AzureElasticJobAgents')
AzureElasticJobAgentsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureElasticJobAgents card
include('elements/azure/DatabasesServiceColor/AzureElasticJobAgents')
AzureElasticJobAgentsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
