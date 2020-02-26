# GcpGkeOnPrem
```text
elements/gcp/Compute/GcpGkeOnPrem
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpGkeOnPrem icon](../../../icons/gcp/Compute/GcpGkeOnPrem.png) | ![GcpGkeOnPrem element](GcpGkeOnPrem.element.png) | ![GcpGkeOnPrem card](GcpGkeOnPrem.card.png) |
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

' loads the GcpGkeOnPrem element
include('elements/gcp/Compute/GcpGkeOnPrem')
GcpGkeOnPrem('element', 'Gke On Prem', 'an optional tech field')
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

' loads the GcpGkeOnPrem element
include('elements/gcp/Compute/GcpGkeOnPrem')
GcpGkeOnPrem('element', 'Gke On Prem', 'an optional tech field')
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

' loads the GcpGkeOnPrem card
include('elements/gcp/Compute/GcpGkeOnPrem')
GcpGkeOnPremCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpGkeOnPrem card
include('elements/gcp/Compute/GcpGkeOnPrem')
GcpGkeOnPremCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
