# GcpContainerRegistry
```text
elements/gcp/DeveloperTools/GcpContainerRegistry
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpContainerRegistry icon](../../../icons/gcp/DeveloperTools/GcpContainerRegistry.png) | ![GcpContainerRegistry element](GcpContainerRegistry.element.png) | ![GcpContainerRegistry card](GcpContainerRegistry.card.png) |
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
include('styles/gcp')

' loads the GcpContainerRegistry element
include('elements/gcp/DeveloperTools/GcpContainerRegistry')
GcpContainerRegistry('element', 'Container Registry', 'an optional tech field')
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

' loads the GcpContainerRegistry element
include('elements/gcp/DeveloperTools/GcpContainerRegistry')
GcpContainerRegistry('element', 'Container Registry', 'an optional tech field')
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
include('styles/gcp')

' loads the GcpContainerRegistry card
include('elements/gcp/DeveloperTools/GcpContainerRegistry')
GcpContainerRegistryCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpContainerRegistry card
include('elements/gcp/DeveloperTools/GcpContainerRegistry')
GcpContainerRegistryCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
