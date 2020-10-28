# AzureServiceHealth
```text
elements/azure/GeneralServiceIcons/AzureServiceHealth
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureServiceHealth icon](../../../icons/azure/GeneralServiceIcons/AzureServiceHealth.png) | ![AzureServiceHealth element](AzureServiceHealth.element.png) | ![AzureServiceHealth card](AzureServiceHealth.card.png) |
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

' loads the AzureServiceHealth element
include('elements/azure/GeneralServiceIcons/AzureServiceHealth')
AzureServiceHealth('element', 'Service Health', 'an optional tech field')
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

' loads the AzureServiceHealth element
include('elements/azure/GeneralServiceIcons/AzureServiceHealth')
AzureServiceHealth('element', 'Service Health', 'an optional tech field')
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

' loads the AzureServiceHealth card
include('elements/azure/GeneralServiceIcons/AzureServiceHealth')
AzureServiceHealthCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureServiceHealth card
include('elements/azure/GeneralServiceIcons/AzureServiceHealth')
AzureServiceHealthCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
