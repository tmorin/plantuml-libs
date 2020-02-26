# AzureCosmosDb
```text
elements/azure/DatabasesServiceColor/AzureCosmosDb
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureCosmosDb icon](../../../icons/azure/DatabasesServiceColor/AzureCosmosDb.png) | ![AzureCosmosDb element](AzureCosmosDb.element.png) | ![AzureCosmosDb card](AzureCosmosDb.card.png) |
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

' loads the AzureCosmosDb element
include('elements/azure/DatabasesServiceColor/AzureCosmosDb')
AzureCosmosDb('element', 'Cosmos Db', 'an optional tech field')
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

' loads the AzureCosmosDb element
include('elements/azure/DatabasesServiceColor/AzureCosmosDb')
AzureCosmosDb('element', 'Cosmos Db', 'an optional tech field')
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

' loads the AzureCosmosDb card
include('elements/azure/DatabasesServiceColor/AzureCosmosDb')
AzureCosmosDbCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureCosmosDb card
include('elements/azure/DatabasesServiceColor/AzureCosmosDb')
AzureCosmosDbCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
