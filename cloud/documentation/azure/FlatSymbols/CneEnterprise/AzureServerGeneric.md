# AzureServerGeneric
```text
elements/azure/FlatSymbols/CneEnterprise/AzureServerGeneric
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureServerGeneric icon](../../../../icons/azure/FlatSymbols/CneEnterprise/AzureServerGeneric.png) | ![AzureServerGeneric element](AzureServerGeneric.element.png) | ![AzureServerGeneric card](AzureServerGeneric.card.png) |
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

' loads the AzureServerGeneric element
include('elements/azure/FlatSymbols/CneEnterprise/AzureServerGeneric')
AzureServerGeneric('element', 'Server Generic', 'an optional tech field')
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

' loads the AzureServerGeneric element
include('elements/azure/FlatSymbols/CneEnterprise/AzureServerGeneric')
AzureServerGeneric('element', 'Server Generic', 'an optional tech field')
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

' loads the AzureServerGeneric card
include('elements/azure/FlatSymbols/CneEnterprise/AzureServerGeneric')
AzureServerGenericCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureServerGeneric card
include('elements/azure/FlatSymbols/CneEnterprise/AzureServerGeneric')
AzureServerGenericCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
