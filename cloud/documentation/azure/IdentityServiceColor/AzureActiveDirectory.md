# AzureActiveDirectory
```text
elements/azure/IdentityServiceColor/AzureActiveDirectory
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureActiveDirectory icon](../../../icons/azure/IdentityServiceColor/AzureActiveDirectory.png) | ![AzureActiveDirectory element](AzureActiveDirectory.element.png) | ![AzureActiveDirectory card](AzureActiveDirectory.card.png) |
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

' loads the AzureActiveDirectory element
include('elements/azure/IdentityServiceColor/AzureActiveDirectory')
AzureActiveDirectory('element', 'Active Directory', 'an optional tech field')
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

' loads the AzureActiveDirectory element
include('elements/azure/IdentityServiceColor/AzureActiveDirectory')
AzureActiveDirectory('element', 'Active Directory', 'an optional tech field')
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

' loads the AzureActiveDirectory card
include('elements/azure/IdentityServiceColor/AzureActiveDirectory')
AzureActiveDirectoryCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureActiveDirectory card
include('elements/azure/IdentityServiceColor/AzureActiveDirectory')
AzureActiveDirectoryCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
