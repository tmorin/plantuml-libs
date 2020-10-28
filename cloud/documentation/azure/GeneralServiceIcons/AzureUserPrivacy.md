# AzureUserPrivacy
```text
elements/azure/GeneralServiceIcons/AzureUserPrivacy
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureUserPrivacy icon](../../../icons/azure/GeneralServiceIcons/AzureUserPrivacy.png) | ![AzureUserPrivacy element](AzureUserPrivacy.element.png) | ![AzureUserPrivacy card](AzureUserPrivacy.card.png) |
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

' loads the AzureUserPrivacy element
include('elements/azure/GeneralServiceIcons/AzureUserPrivacy')
AzureUserPrivacy('element', 'User Privacy', 'an optional tech field')
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

' loads the AzureUserPrivacy element
include('elements/azure/GeneralServiceIcons/AzureUserPrivacy')
AzureUserPrivacy('element', 'User Privacy', 'an optional tech field')
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

' loads the AzureUserPrivacy card
include('elements/azure/GeneralServiceIcons/AzureUserPrivacy')
AzureUserPrivacyCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureUserPrivacy card
include('elements/azure/GeneralServiceIcons/AzureUserPrivacy')
AzureUserPrivacyCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
