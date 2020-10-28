# GcpAppEngine
```text
elements/gcp/Compute/GcpAppEngine
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpAppEngine icon](../../../icons/gcp/Compute/GcpAppEngine.png) | ![GcpAppEngine element](GcpAppEngine.element.png) | ![GcpAppEngine card](GcpAppEngine.card.png) |
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

' loads the GcpAppEngine element
include('elements/gcp/Compute/GcpAppEngine')
GcpAppEngine('element', 'App Engine', 'an optional tech field')
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

' loads the GcpAppEngine element
include('elements/gcp/Compute/GcpAppEngine')
GcpAppEngine('element', 'App Engine', 'an optional tech field')
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

' loads the GcpAppEngine card
include('elements/gcp/Compute/GcpAppEngine')
GcpAppEngineCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpAppEngine card
include('elements/gcp/Compute/GcpAppEngine')
GcpAppEngineCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
