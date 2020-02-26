# GcpCloudSpanner
```text
elements/gcp/Databases/GcpCloudSpanner
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpCloudSpanner icon](../../../icons/gcp/Databases/GcpCloudSpanner.png) | ![GcpCloudSpanner element](GcpCloudSpanner.element.png) | ![GcpCloudSpanner card](GcpCloudSpanner.card.png) |
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

' loads the GcpCloudSpanner element
include('elements/gcp/Databases/GcpCloudSpanner')
GcpCloudSpanner('element', 'Cloud Spanner', 'an optional tech field')
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

' loads the GcpCloudSpanner element
include('elements/gcp/Databases/GcpCloudSpanner')
GcpCloudSpanner('element', 'Cloud Spanner', 'an optional tech field')
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

' loads the GcpCloudSpanner card
include('elements/gcp/Databases/GcpCloudSpanner')
GcpCloudSpannerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpCloudSpanner card
include('elements/gcp/Databases/GcpCloudSpanner')
GcpCloudSpannerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
