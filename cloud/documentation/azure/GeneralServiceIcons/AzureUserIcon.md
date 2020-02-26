# AzureUserIcon
```text
elements/azure/GeneralServiceIcons/AzureUserIcon
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureUserIcon icon](../../../icons/azure/GeneralServiceIcons/AzureUserIcon.png) | ![AzureUserIcon element](AzureUserIcon.element.png) | ![AzureUserIcon card](AzureUserIcon.card.png) |
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

' loads the AzureUserIcon element
include('elements/azure/GeneralServiceIcons/AzureUserIcon')
AzureUserIcon('element', 'User Icon', 'an optional tech field')
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

' loads the AzureUserIcon element
include('elements/azure/GeneralServiceIcons/AzureUserIcon')
AzureUserIcon('element', 'User Icon', 'an optional tech field')
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

' loads the AzureUserIcon card
include('elements/azure/GeneralServiceIcons/AzureUserIcon')
AzureUserIconCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureUserIcon card
include('elements/azure/GeneralServiceIcons/AzureUserIcon')
AzureUserIconCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
