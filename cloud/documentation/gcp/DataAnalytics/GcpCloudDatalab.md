# GcpCloudDatalab
```text
elements/gcp/DataAnalytics/GcpCloudDatalab
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpCloudDatalab icon](../../../icons/gcp/DataAnalytics/GcpCloudDatalab.png) | ![GcpCloudDatalab element](GcpCloudDatalab.element.png) | ![GcpCloudDatalab card](GcpCloudDatalab.card.png) |
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

' loads the GcpCloudDatalab element
include('elements/gcp/DataAnalytics/GcpCloudDatalab')
GcpCloudDatalab('element', 'Cloud Datalab', 'an optional tech field')
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

' loads the GcpCloudDatalab element
include('elements/gcp/DataAnalytics/GcpCloudDatalab')
GcpCloudDatalab('element', 'Cloud Datalab', 'an optional tech field')
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

' loads the GcpCloudDatalab card
include('elements/gcp/DataAnalytics/GcpCloudDatalab')
GcpCloudDatalabCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpCloudDatalab card
include('elements/gcp/DataAnalytics/GcpCloudDatalab')
GcpCloudDatalabCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
