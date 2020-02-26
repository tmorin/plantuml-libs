# AzureDatabricks
```text
elements/azure/Companies/AzureDatabricks
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureDatabricks icon](../../../icons/azure/Companies/AzureDatabricks.png) | ![AzureDatabricks element](AzureDatabricks.element.png) | ![AzureDatabricks card](AzureDatabricks.card.png) |
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

' loads the AzureDatabricks element
include('elements/azure/Companies/AzureDatabricks')
AzureDatabricks('element', 'Databricks', 'an optional tech field')
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

' loads the AzureDatabricks element
include('elements/azure/Companies/AzureDatabricks')
AzureDatabricks('element', 'Databricks', 'an optional tech field')
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

' loads the AzureDatabricks card
include('elements/azure/Companies/AzureDatabricks')
AzureDatabricksCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureDatabricks card
include('elements/azure/Companies/AzureDatabricks')
AzureDatabricksCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
