# AzureTable
```text
elements/azure/FlatSymbols/CneEnterprise/AzureTable
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureTable icon](../../../../icons/azure/FlatSymbols/CneEnterprise/AzureTable.png) | ![AzureTable element](AzureTable.element.png) | ![AzureTable card](AzureTable.card.png) |
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

' loads the AzureTable element
include('elements/azure/FlatSymbols/CneEnterprise/AzureTable')
AzureTable('element', 'Table', 'an optional tech field')
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

' loads the style
include('styles/azure')

' loads the AzureTable element
include('elements/azure/FlatSymbols/CneEnterprise/AzureTable')
AzureTable('element', 'Table', 'an optional tech field')
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

' loads the AzureTable card
include('elements/azure/FlatSymbols/CneEnterprise/AzureTable')
AzureTableCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the style
include('styles/azure')

' loads the AzureTable card
include('elements/azure/FlatSymbols/CneEnterprise/AzureTable')
AzureTableCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
