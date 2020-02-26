# AzureDedicatedEventHub
```text
elements/azure/IntuneServiceColor/AzureDedicatedEventHub
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureDedicatedEventHub icon](../../../icons/azure/IntuneServiceColor/AzureDedicatedEventHub.png) | ![AzureDedicatedEventHub element](AzureDedicatedEventHub.element.png) | ![AzureDedicatedEventHub card](AzureDedicatedEventHub.card.png) |
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

' loads the AzureDedicatedEventHub element
include('elements/azure/IntuneServiceColor/AzureDedicatedEventHub')
AzureDedicatedEventHub('element', 'Dedicated Event Hub', 'an optional tech field')
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

' loads the AzureDedicatedEventHub element
include('elements/azure/IntuneServiceColor/AzureDedicatedEventHub')
AzureDedicatedEventHub('element', 'Dedicated Event Hub', 'an optional tech field')
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

' loads the AzureDedicatedEventHub card
include('elements/azure/IntuneServiceColor/AzureDedicatedEventHub')
AzureDedicatedEventHubCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureDedicatedEventHub card
include('elements/azure/IntuneServiceColor/AzureDedicatedEventHub')
AzureDedicatedEventHubCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
