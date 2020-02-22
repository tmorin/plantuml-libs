# GcpCloudSecurityCommandCenter
```text
elements/gcp/Security/GcpCloudSecurityCommandCenter
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpCloudSecurityCommandCenter icon](../../../icons/gcp/Security/GcpCloudSecurityCommandCenter.png) | ![GcpCloudSecurityCommandCenter element](GcpCloudSecurityCommandCenter.element.png) | ![GcpCloudSecurityCommandCenter card](GcpCloudSecurityCommandCenter.card.png) |
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

' loads the GcpCloudSecurityCommandCenter element
include('elements/gcp/Security/GcpCloudSecurityCommandCenter')
GcpCloudSecurityCommandCenter('element', 'Cloud Security Command Center', 'an optional tech field')
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

' loads the GcpCloudSecurityCommandCenter element
include('elements/gcp/Security/GcpCloudSecurityCommandCenter')
GcpCloudSecurityCommandCenter('element', 'Cloud Security Command Center', 'an optional tech field')
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

' loads the GcpCloudSecurityCommandCenter card
include('elements/gcp/Security/GcpCloudSecurityCommandCenter')
GcpCloudSecurityCommandCenterCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpCloudSecurityCommandCenter card
include('elements/gcp/Security/GcpCloudSecurityCommandCenter')
GcpCloudSecurityCommandCenterCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
