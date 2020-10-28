# AzureElasticDatabasePools
```text
elements/azure/DatabasesServiceColor/AzureElasticDatabasePools
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureElasticDatabasePools icon](../../../icons/azure/DatabasesServiceColor/AzureElasticDatabasePools.png) | ![AzureElasticDatabasePools element](AzureElasticDatabasePools.element.png) | ![AzureElasticDatabasePools card](AzureElasticDatabasePools.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="v1.x"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/azure')

' loads the AzureElasticDatabasePools element
include('elements/azure/DatabasesServiceColor/AzureElasticDatabasePools')
AzureElasticDatabasePools('element', 'Elastic Database Pools', 'an optional tech field')
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

' loads the AzureElasticDatabasePools element
include('elements/azure/DatabasesServiceColor/AzureElasticDatabasePools')
AzureElasticDatabasePools('element', 'Elastic Database Pools', 'an optional tech field')
@enduml
```
## Card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="v1.x"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/azure')

' loads the AzureElasticDatabasePools card
include('elements/azure/DatabasesServiceColor/AzureElasticDatabasePools')
AzureElasticDatabasePoolsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureElasticDatabasePools card
include('elements/azure/DatabasesServiceColor/AzureElasticDatabasePools')
AzureElasticDatabasePoolsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
