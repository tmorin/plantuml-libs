# AzureUserPermissions
```text
elements/azure/FlatSymbols/CneEnterprise/AzureUserPermissions
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureUserPermissions icon](../../../../icons/azure/FlatSymbols/CneEnterprise/AzureUserPermissions.png) | ![AzureUserPermissions element](AzureUserPermissions.element.png) | ![AzureUserPermissions card](AzureUserPermissions.card.png) |
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

' loads the AzureUserPermissions element
include('elements/azure/FlatSymbols/CneEnterprise/AzureUserPermissions')
AzureUserPermissions('element', 'User Permissions', 'an optional tech field')
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

' loads the AzureUserPermissions element
include('elements/azure/FlatSymbols/CneEnterprise/AzureUserPermissions')
AzureUserPermissions('element', 'User Permissions', 'an optional tech field')
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

' loads the AzureUserPermissions card
include('elements/azure/FlatSymbols/CneEnterprise/AzureUserPermissions')
AzureUserPermissionsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureUserPermissions card
include('elements/azure/FlatSymbols/CneEnterprise/AzureUserPermissions')
AzureUserPermissionsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
