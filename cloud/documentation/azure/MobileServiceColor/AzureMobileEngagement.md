# AzureMobileEngagement
```text
elements/azure/MobileServiceColor/AzureMobileEngagement
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureMobileEngagement icon](../../../icons/azure/MobileServiceColor/AzureMobileEngagement.png) | ![AzureMobileEngagement element](AzureMobileEngagement.element.png) | ![AzureMobileEngagement card](AzureMobileEngagement.card.png) |
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

' loads the AzureMobileEngagement element
include('elements/azure/MobileServiceColor/AzureMobileEngagement')
AzureMobileEngagement('element', 'Mobile Engagement', 'an optional tech field')
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

' loads the AzureMobileEngagement element
include('elements/azure/MobileServiceColor/AzureMobileEngagement')
AzureMobileEngagement('element', 'Mobile Engagement', 'an optional tech field')
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

' loads the AzureMobileEngagement card
include('elements/azure/MobileServiceColor/AzureMobileEngagement')
AzureMobileEngagementCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureMobileEngagement card
include('elements/azure/MobileServiceColor/AzureMobileEngagement')
AzureMobileEngagementCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
