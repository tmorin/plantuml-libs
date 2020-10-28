# AzureRolesClassForMultipleVersions
```text
elements/azure/FlatSymbols/CneSystemCenter/AzureRolesClassForMultipleVersions
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureRolesClassForMultipleVersions icon](../../../../icons/azure/FlatSymbols/CneSystemCenter/AzureRolesClassForMultipleVersions.png) | ![AzureRolesClassForMultipleVersions element](AzureRolesClassForMultipleVersions.element.png) | ![AzureRolesClassForMultipleVersions card](AzureRolesClassForMultipleVersions.card.png) |
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

' loads the AzureRolesClassForMultipleVersions element
include('elements/azure/FlatSymbols/CneSystemCenter/AzureRolesClassForMultipleVersions')
AzureRolesClassForMultipleVersions('element', 'Roles Class For Multiple Versions', 'an optional tech field')
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

' loads the AzureRolesClassForMultipleVersions element
include('elements/azure/FlatSymbols/CneSystemCenter/AzureRolesClassForMultipleVersions')
AzureRolesClassForMultipleVersions('element', 'Roles Class For Multiple Versions', 'an optional tech field')
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

' loads the AzureRolesClassForMultipleVersions card
include('elements/azure/FlatSymbols/CneSystemCenter/AzureRolesClassForMultipleVersions')
AzureRolesClassForMultipleVersionsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureRolesClassForMultipleVersions card
include('elements/azure/FlatSymbols/CneSystemCenter/AzureRolesClassForMultipleVersions')
AzureRolesClassForMultipleVersionsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
