# GcpCloudConsole
```text
elements/gcp/ManagementTools/GcpCloudConsole
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpCloudConsole icon](../../../icons/gcp/ManagementTools/GcpCloudConsole.png) | ![GcpCloudConsole element](GcpCloudConsole.element.png) | ![GcpCloudConsole card](GcpCloudConsole.card.png) |
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

' loads the GcpCloudConsole element
include('elements/gcp/ManagementTools/GcpCloudConsole')
GcpCloudConsole('element', 'Cloud Console', 'an optional tech field')
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

' loads the GcpCloudConsole element
include('elements/gcp/ManagementTools/GcpCloudConsole')
GcpCloudConsole('element', 'Cloud Console', 'an optional tech field')
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

' loads the GcpCloudConsole card
include('elements/gcp/ManagementTools/GcpCloudConsole')
GcpCloudConsoleCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpCloudConsole card
include('elements/gcp/ManagementTools/GcpCloudConsole')
GcpCloudConsoleCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
