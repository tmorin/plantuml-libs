# GcpComputeEngine
```text
elements/gcp/Compute/GcpComputeEngine
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpComputeEngine icon](../../../icons/gcp/Compute/GcpComputeEngine.png) | ![GcpComputeEngine element](GcpComputeEngine.element.png) | ![GcpComputeEngine card](GcpComputeEngine.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the AWS style
include('styles/aws')

' loads the GcpComputeEngine element
include('elements/gcp/Compute/GcpComputeEngine')
GcpComputeEngine('element', 'Compute Engine', 'an optional tech field')
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

' loads the AWS style
include('styles/aws')

' loads the GcpComputeEngine element
include('elements/gcp/Compute/GcpComputeEngine')
GcpComputeEngine('element', 'Compute Engine', 'an optional tech field')
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

' loads the AWS style
include('styles/gcp')

' loads the GcpComputeEngine card
include('elements/gcp/Compute/GcpComputeEngine')
GcpComputeEngineCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GCP style
include('styles/gcp')

' loads the GcpComputeEngine card
include('elements/gcp/Compute/GcpComputeEngine')
GcpComputeEngineCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
