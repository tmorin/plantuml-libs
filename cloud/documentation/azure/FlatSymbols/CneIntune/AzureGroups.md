# AzureGroups
```text
elements/azure/FlatSymbols/CneIntune/AzureGroups
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureGroups icon](../../../../icons/azure/FlatSymbols/CneIntune/AzureGroups.png) | ![AzureGroups element](AzureGroups.element.png) | ![AzureGroups card](AzureGroups.card.png) |
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

' loads the AzureGroups element
include('elements/azure/FlatSymbols/CneIntune/AzureGroups')
AzureGroups('element', 'Groups', 'an optional tech field')
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

' loads the AzureGroups element
include('elements/azure/FlatSymbols/CneIntune/AzureGroups')
AzureGroups('element', 'Groups', 'an optional tech field')
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

' loads the AzureGroups card
include('elements/azure/FlatSymbols/CneIntune/AzureGroups')
AzureGroupsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureGroups card
include('elements/azure/FlatSymbols/CneIntune/AzureGroups')
AzureGroupsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
