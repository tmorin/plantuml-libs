# GcpCloudCdn
```text
elements/gcp/Networking/GcpCloudCdn
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpCloudCdn icon](../../../icons/gcp/Networking/GcpCloudCdn.png) | ![GcpCloudCdn element](GcpCloudCdn.element.png) | ![GcpCloudCdn card](GcpCloudCdn.card.png) |
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

' loads the GcpCloudCdn element
include('elements/gcp/Networking/GcpCloudCdn')
GcpCloudCdn('element', 'Cloud Cdn', 'an optional tech field')
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

' loads the GcpCloudCdn element
include('elements/gcp/Networking/GcpCloudCdn')
GcpCloudCdn('element', 'Cloud Cdn', 'an optional tech field')
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

' loads the GcpCloudCdn card
include('elements/gcp/Networking/GcpCloudCdn')
GcpCloudCdnCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpCloudCdn card
include('elements/gcp/Networking/GcpCloudCdn')
GcpCloudCdnCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
