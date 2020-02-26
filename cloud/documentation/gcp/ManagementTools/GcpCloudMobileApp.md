# GcpCloudMobileApp
```text
elements/gcp/ManagementTools/GcpCloudMobileApp
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpCloudMobileApp icon](../../../icons/gcp/ManagementTools/GcpCloudMobileApp.png) | ![GcpCloudMobileApp element](GcpCloudMobileApp.element.png) | ![GcpCloudMobileApp card](GcpCloudMobileApp.card.png) |
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

' loads the GcpCloudMobileApp element
include('elements/gcp/ManagementTools/GcpCloudMobileApp')
GcpCloudMobileApp('element', 'Cloud Mobile App', 'an optional tech field')
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

' loads the GcpCloudMobileApp element
include('elements/gcp/ManagementTools/GcpCloudMobileApp')
GcpCloudMobileApp('element', 'Cloud Mobile App', 'an optional tech field')
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

' loads the GcpCloudMobileApp card
include('elements/gcp/ManagementTools/GcpCloudMobileApp')
GcpCloudMobileAppCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpCloudMobileApp card
include('elements/gcp/ManagementTools/GcpCloudMobileApp')
GcpCloudMobileAppCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
