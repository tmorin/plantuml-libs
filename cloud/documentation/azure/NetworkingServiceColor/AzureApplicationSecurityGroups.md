# AzureApplicationSecurityGroups
```text
elements/azure/NetworkingServiceColor/AzureApplicationSecurityGroups
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureApplicationSecurityGroups icon](../../../icons/azure/NetworkingServiceColor/AzureApplicationSecurityGroups.png) | ![AzureApplicationSecurityGroups element](AzureApplicationSecurityGroups.element.png) | ![AzureApplicationSecurityGroups card](AzureApplicationSecurityGroups.card.png) |
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

' loads the AzureApplicationSecurityGroups element
include('elements/azure/NetworkingServiceColor/AzureApplicationSecurityGroups')
AzureApplicationSecurityGroups('element', 'Application Security Groups', 'an optional tech field')
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

' loads the AzureApplicationSecurityGroups element
include('elements/azure/NetworkingServiceColor/AzureApplicationSecurityGroups')
AzureApplicationSecurityGroups('element', 'Application Security Groups', 'an optional tech field')
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

' loads the AzureApplicationSecurityGroups card
include('elements/azure/NetworkingServiceColor/AzureApplicationSecurityGroups')
AzureApplicationSecurityGroupsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureApplicationSecurityGroups card
include('elements/azure/NetworkingServiceColor/AzureApplicationSecurityGroups')
AzureApplicationSecurityGroupsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
