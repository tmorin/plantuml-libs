# AzureVirtualWans
```text
elements/azure/NetworkingServiceColor/AzureVirtualWans
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureVirtualWans icon](../../../icons/azure/NetworkingServiceColor/AzureVirtualWans.png) | ![AzureVirtualWans element](AzureVirtualWans.element.png) | ![AzureVirtualWans card](AzureVirtualWans.card.png) |
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

' loads the AzureVirtualWans element
include('elements/azure/NetworkingServiceColor/AzureVirtualWans')
AzureVirtualWans('element', 'Virtual Wans', 'an optional tech field')
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

' loads the AzureVirtualWans element
include('elements/azure/NetworkingServiceColor/AzureVirtualWans')
AzureVirtualWans('element', 'Virtual Wans', 'an optional tech field')
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

' loads the AzureVirtualWans card
include('elements/azure/NetworkingServiceColor/AzureVirtualWans')
AzureVirtualWansCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureVirtualWans card
include('elements/azure/NetworkingServiceColor/AzureVirtualWans')
AzureVirtualWansCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
