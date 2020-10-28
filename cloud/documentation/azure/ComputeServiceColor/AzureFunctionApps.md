# AzureFunctionApps
```text
elements/azure/ComputeServiceColor/AzureFunctionApps
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![AzureFunctionApps icon](../../../icons/azure/ComputeServiceColor/AzureFunctionApps.png) | ![AzureFunctionApps element](AzureFunctionApps.element.png) | ![AzureFunctionApps card](AzureFunctionApps.card.png) |
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

' loads the AzureFunctionApps element
include('elements/azure/ComputeServiceColor/AzureFunctionApps')
AzureFunctionApps('element', 'Function Apps', 'an optional tech field')
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

' loads the AzureFunctionApps element
include('elements/azure/ComputeServiceColor/AzureFunctionApps')
AzureFunctionApps('element', 'Function Apps', 'an optional tech field')
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

' loads the AzureFunctionApps card
include('elements/azure/ComputeServiceColor/AzureFunctionApps')
AzureFunctionAppsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the AzureFunctionApps card
include('elements/azure/ComputeServiceColor/AzureFunctionApps')
AzureFunctionAppsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
