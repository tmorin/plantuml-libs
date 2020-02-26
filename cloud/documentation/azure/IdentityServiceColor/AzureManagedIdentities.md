# AzureManagedIdentities
```text
elements/azure/IdentityServiceColor/AzureManagedIdentities
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureManagedIdentities icon](../../../icons/azure/IdentityServiceColor/AzureManagedIdentities.png) | ![AzureManagedIdentities element](AzureManagedIdentities.element.png) | ![AzureManagedIdentities card](AzureManagedIdentities.card.png) |
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

' loads the AzureManagedIdentities element
include('elements/azure/IdentityServiceColor/AzureManagedIdentities')
AzureManagedIdentities('element', 'Managed Identities', 'an optional tech field')
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

' loads the AzureManagedIdentities element
include('elements/azure/IdentityServiceColor/AzureManagedIdentities')
AzureManagedIdentities('element', 'Managed Identities', 'an optional tech field')
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

' loads the AzureManagedIdentities card
include('elements/azure/IdentityServiceColor/AzureManagedIdentities')
AzureManagedIdentitiesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureManagedIdentities card
include('elements/azure/IdentityServiceColor/AzureManagedIdentities')
AzureManagedIdentitiesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
