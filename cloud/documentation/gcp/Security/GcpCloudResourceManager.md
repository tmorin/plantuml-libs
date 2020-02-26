# GcpCloudResourceManager
```text
elements/gcp/Security/GcpCloudResourceManager
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpCloudResourceManager icon](../../../icons/gcp/Security/GcpCloudResourceManager.png) | ![GcpCloudResourceManager element](GcpCloudResourceManager.element.png) | ![GcpCloudResourceManager card](GcpCloudResourceManager.card.png) |
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

' loads the GcpCloudResourceManager element
include('elements/gcp/Security/GcpCloudResourceManager')
GcpCloudResourceManager('element', 'Cloud Resource Manager', 'an optional tech field')
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

' loads the GcpCloudResourceManager element
include('elements/gcp/Security/GcpCloudResourceManager')
GcpCloudResourceManager('element', 'Cloud Resource Manager', 'an optional tech field')
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

' loads the GcpCloudResourceManager card
include('elements/gcp/Security/GcpCloudResourceManager')
GcpCloudResourceManagerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpCloudResourceManager card
include('elements/gcp/Security/GcpCloudResourceManager')
GcpCloudResourceManagerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
