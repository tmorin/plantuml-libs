# GcpDebugger
```text
elements/gcp/ManagementTools/GcpDebugger
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpDebugger icon](../../../icons/gcp/ManagementTools/GcpDebugger.png) | ![GcpDebugger element](GcpDebugger.element.png) | ![GcpDebugger card](GcpDebugger.card.png) |
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

' loads the GcpDebugger element
include('elements/gcp/ManagementTools/GcpDebugger')
GcpDebugger('element', 'Debugger', 'an optional tech field')
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

' loads the GcpDebugger element
include('elements/gcp/ManagementTools/GcpDebugger')
GcpDebugger('element', 'Debugger', 'an optional tech field')
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

' loads the GcpDebugger card
include('elements/gcp/ManagementTools/GcpDebugger')
GcpDebuggerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpDebugger card
include('elements/gcp/ManagementTools/GcpDebugger')
GcpDebuggerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
