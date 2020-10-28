# GcpCloudApis
```text
elements/gcp/ManagementTools/GcpCloudApis
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpCloudApis icon](../../../icons/gcp/ManagementTools/GcpCloudApis.png) | ![GcpCloudApis element](GcpCloudApis.element.png) | ![GcpCloudApis card](GcpCloudApis.card.png) |
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

' loads the GcpCloudApis element
include('elements/gcp/ManagementTools/GcpCloudApis')
GcpCloudApis('element', 'Cloud Apis', 'an optional tech field')
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

' loads the GcpCloudApis element
include('elements/gcp/ManagementTools/GcpCloudApis')
GcpCloudApis('element', 'Cloud Apis', 'an optional tech field')
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

' loads the GcpCloudApis card
include('elements/gcp/ManagementTools/GcpCloudApis')
GcpCloudApisCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpCloudApis card
include('elements/gcp/ManagementTools/GcpCloudApis')
GcpCloudApisCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
