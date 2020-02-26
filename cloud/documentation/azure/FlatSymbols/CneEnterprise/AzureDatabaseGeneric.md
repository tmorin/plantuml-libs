# AzureDatabaseGeneric
```text
elements/azure/FlatSymbols/CneEnterprise/AzureDatabaseGeneric
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureDatabaseGeneric icon](../../../../icons/azure/FlatSymbols/CneEnterprise/AzureDatabaseGeneric.png) | ![AzureDatabaseGeneric element](AzureDatabaseGeneric.element.png) | ![AzureDatabaseGeneric card](AzureDatabaseGeneric.card.png) |
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

' loads the AzureDatabaseGeneric element
include('elements/azure/FlatSymbols/CneEnterprise/AzureDatabaseGeneric')
AzureDatabaseGeneric('element', 'Database Generic', 'an optional tech field')
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

' loads the AzureDatabaseGeneric element
include('elements/azure/FlatSymbols/CneEnterprise/AzureDatabaseGeneric')
AzureDatabaseGeneric('element', 'Database Generic', 'an optional tech field')
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

' loads the AzureDatabaseGeneric card
include('elements/azure/FlatSymbols/CneEnterprise/AzureDatabaseGeneric')
AzureDatabaseGenericCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureDatabaseGeneric card
include('elements/azure/FlatSymbols/CneEnterprise/AzureDatabaseGeneric')
AzureDatabaseGenericCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
