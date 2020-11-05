# GcpApigeeSense
```text
elements/gcp/ApiManagement/GcpApigeeSense
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpApigeeSense icon](../../../icons/gcp/ApiManagement/GcpApigeeSense.png) | ![GcpApigeeSense element](GcpApigeeSense.element.png) | ![GcpApigeeSense card](GcpApigeeSense.card.png) |
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

' loads the GcpApigeeSense element
include('elements/gcp/ApiManagement/GcpApigeeSense')
GcpApigeeSense('element', 'Apigee Sense', 'an optional tech field')
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

' loads the GcpApigeeSense element
include('elements/gcp/ApiManagement/GcpApigeeSense')
GcpApigeeSense('element', 'Apigee Sense', 'an optional tech field')
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

' loads the GcpApigeeSense card
include('elements/gcp/ApiManagement/GcpApigeeSense')
GcpApigeeSenseCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpApigeeSense card
include('elements/gcp/ApiManagement/GcpApigeeSense')
GcpApigeeSenseCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```