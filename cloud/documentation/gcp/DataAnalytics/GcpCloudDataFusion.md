# GcpCloudDataFusion
```text
elements/gcp/DataAnalytics/GcpCloudDataFusion
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpCloudDataFusion icon](../../../icons/gcp/DataAnalytics/GcpCloudDataFusion.png) | ![GcpCloudDataFusion element](GcpCloudDataFusion.element.png) | ![GcpCloudDataFusion card](GcpCloudDataFusion.card.png) |
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

' loads the GcpCloudDataFusion element
include('elements/gcp/DataAnalytics/GcpCloudDataFusion')
GcpCloudDataFusion('element', 'Cloud Data Fusion', 'an optional tech field')
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

' loads the GcpCloudDataFusion element
include('elements/gcp/DataAnalytics/GcpCloudDataFusion')
GcpCloudDataFusion('element', 'Cloud Data Fusion', 'an optional tech field')
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

' loads the GcpCloudDataFusion card
include('elements/gcp/DataAnalytics/GcpCloudDataFusion')
GcpCloudDataFusionCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpCloudDataFusion card
include('elements/gcp/DataAnalytics/GcpCloudDataFusion')
GcpCloudDataFusionCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
