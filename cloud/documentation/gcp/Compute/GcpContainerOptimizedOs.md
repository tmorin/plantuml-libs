# GcpContainerOptimizedOs
```text
elements/gcp/Compute/GcpContainerOptimizedOs
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpContainerOptimizedOs icon](../../../icons/gcp/Compute/GcpContainerOptimizedOs.png) | ![GcpContainerOptimizedOs element](GcpContainerOptimizedOs.element.png) | ![GcpContainerOptimizedOs card](GcpContainerOptimizedOs.card.png) |
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

' loads the GcpContainerOptimizedOs element
include('elements/gcp/Compute/GcpContainerOptimizedOs')
GcpContainerOptimizedOs('element', 'Container Optimized Os', 'an optional tech field')
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

' loads the GcpContainerOptimizedOs element
include('elements/gcp/Compute/GcpContainerOptimizedOs')
GcpContainerOptimizedOs('element', 'Container Optimized Os', 'an optional tech field')
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

' loads the GcpContainerOptimizedOs card
include('elements/gcp/Compute/GcpContainerOptimizedOs')
GcpContainerOptimizedOsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpContainerOptimizedOs card
include('elements/gcp/Compute/GcpContainerOptimizedOs')
GcpContainerOptimizedOsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
