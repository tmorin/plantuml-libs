# GcpKubetnetesEngine
```text
elements/gcp/Compute/GcpKubetnetesEngine
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpKubetnetesEngine icon](../../../icons/gcp/Compute/GcpKubetnetesEngine.png) | ![GcpKubetnetesEngine element](GcpKubetnetesEngine.element.png) | ![GcpKubetnetesEngine card](GcpKubetnetesEngine.card.png) |
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
include('styles/gcp')

' loads the GcpKubetnetesEngine element
include('elements/gcp/Compute/GcpKubetnetesEngine')
GcpKubetnetesEngine('element', 'Kubetnetes Engine', 'an optional tech field')
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
include('styles/gcp')

' loads the GcpKubetnetesEngine element
include('elements/gcp/Compute/GcpKubetnetesEngine')
GcpKubetnetesEngine('element', 'Kubetnetes Engine', 'an optional tech field')
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
include('styles/gcp')

' loads the GcpKubetnetesEngine card
include('elements/gcp/Compute/GcpKubetnetesEngine')
GcpKubetnetesEngineCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
include('styles/gcp')

' loads the GcpKubetnetesEngine card
include('elements/gcp/Compute/GcpKubetnetesEngine')
GcpKubetnetesEngineCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
