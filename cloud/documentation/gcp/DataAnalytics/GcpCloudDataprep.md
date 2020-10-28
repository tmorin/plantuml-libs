# GcpCloudDataprep
```text
elements/gcp/DataAnalytics/GcpCloudDataprep
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpCloudDataprep icon](../../../icons/gcp/DataAnalytics/GcpCloudDataprep.png) | ![GcpCloudDataprep element](GcpCloudDataprep.element.png) | ![GcpCloudDataprep card](GcpCloudDataprep.card.png) |
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

' loads the GcpCloudDataprep element
include('elements/gcp/DataAnalytics/GcpCloudDataprep')
GcpCloudDataprep('element', 'Cloud Dataprep', 'an optional tech field')
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

' loads the GcpCloudDataprep element
include('elements/gcp/DataAnalytics/GcpCloudDataprep')
GcpCloudDataprep('element', 'Cloud Dataprep', 'an optional tech field')
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

' loads the GcpCloudDataprep card
include('elements/gcp/DataAnalytics/GcpCloudDataprep')
GcpCloudDataprepCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpCloudDataprep card
include('elements/gcp/DataAnalytics/GcpCloudDataprep')
GcpCloudDataprepCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
