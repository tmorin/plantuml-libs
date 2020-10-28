# AzureSubscriptions
```text
elements/azure/GeneralServiceIcons/AzureSubscriptions
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureSubscriptions icon](../../../icons/azure/GeneralServiceIcons/AzureSubscriptions.png) | ![AzureSubscriptions element](AzureSubscriptions.element.png) | ![AzureSubscriptions card](AzureSubscriptions.card.png) |
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

' loads the AzureSubscriptions element
include('elements/azure/GeneralServiceIcons/AzureSubscriptions')
AzureSubscriptions('element', 'Subscriptions', 'an optional tech field')
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

' loads the AzureSubscriptions element
include('elements/azure/GeneralServiceIcons/AzureSubscriptions')
AzureSubscriptions('element', 'Subscriptions', 'an optional tech field')
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

' loads the AzureSubscriptions card
include('elements/azure/GeneralServiceIcons/AzureSubscriptions')
AzureSubscriptionsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureSubscriptions card
include('elements/azure/GeneralServiceIcons/AzureSubscriptions')
AzureSubscriptionsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
