# GcpTrafficDirector
```text
elements/gcp/Networking/GcpTrafficDirector
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpTrafficDirector icon](../../../icons/gcp/Networking/GcpTrafficDirector.png) | ![GcpTrafficDirector element](GcpTrafficDirector.element.png) | ![GcpTrafficDirector card](GcpTrafficDirector.card.png) |
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

' loads the GcpTrafficDirector element
include('elements/gcp/Networking/GcpTrafficDirector')
GcpTrafficDirector('element', 'Traffic Director', 'an optional tech field')
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

' loads the GcpTrafficDirector element
include('elements/gcp/Networking/GcpTrafficDirector')
GcpTrafficDirector('element', 'Traffic Director', 'an optional tech field')
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

' loads the GcpTrafficDirector card
include('elements/gcp/Networking/GcpTrafficDirector')
GcpTrafficDirectorCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpTrafficDirector card
include('elements/gcp/Networking/GcpTrafficDirector')
GcpTrafficDirectorCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
