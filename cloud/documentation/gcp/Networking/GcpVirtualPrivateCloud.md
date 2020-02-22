# GcpVirtualPrivateCloud
```text
elements/gcp/Networking/GcpVirtualPrivateCloud
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpVirtualPrivateCloud icon](../../../icons/gcp/Networking/GcpVirtualPrivateCloud.png) | ![GcpVirtualPrivateCloud element](GcpVirtualPrivateCloud.element.png) | ![GcpVirtualPrivateCloud card](GcpVirtualPrivateCloud.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the AWS style
include('styles/aws')

' loads the GcpVirtualPrivateCloud element
include('elements/gcp/Networking/GcpVirtualPrivateCloud')
GcpVirtualPrivateCloud('element', 'Virtual Private Cloud', 'an optional tech field')
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

' loads the AWS style
include('styles/aws')

' loads the GcpVirtualPrivateCloud element
include('elements/gcp/Networking/GcpVirtualPrivateCloud')
GcpVirtualPrivateCloud('element', 'Virtual Private Cloud', 'an optional tech field')
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

' loads the AWS style
include('styles/gcp')

' loads the GcpVirtualPrivateCloud card
include('elements/gcp/Networking/GcpVirtualPrivateCloud')
GcpVirtualPrivateCloudCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GCP style
include('styles/gcp')

' loads the GcpVirtualPrivateCloud card
include('elements/gcp/Networking/GcpVirtualPrivateCloud')
GcpVirtualPrivateCloudCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
