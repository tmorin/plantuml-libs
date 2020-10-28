# AzureUserResource
```text
elements/azure/GeneralServiceIcons/AzureUserResource
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureUserResource icon](../../../icons/azure/GeneralServiceIcons/AzureUserResource.png) | ![AzureUserResource element](AzureUserResource.element.png) | ![AzureUserResource card](AzureUserResource.card.png) |
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

' loads the AzureUserResource element
include('elements/azure/GeneralServiceIcons/AzureUserResource')
AzureUserResource('element', 'User Resource', 'an optional tech field')
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

' loads the AzureUserResource element
include('elements/azure/GeneralServiceIcons/AzureUserResource')
AzureUserResource('element', 'User Resource', 'an optional tech field')
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

' loads the AzureUserResource card
include('elements/azure/GeneralServiceIcons/AzureUserResource')
AzureUserResourceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureUserResource card
include('elements/azure/GeneralServiceIcons/AzureUserResource')
AzureUserResourceCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
