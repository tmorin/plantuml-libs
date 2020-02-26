# GcpCloudBuild
```text
elements/gcp/DeveloperTools/GcpCloudBuild
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpCloudBuild icon](../../../icons/gcp/DeveloperTools/GcpCloudBuild.png) | ![GcpCloudBuild element](GcpCloudBuild.element.png) | ![GcpCloudBuild card](GcpCloudBuild.card.png) |
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

' loads the GcpCloudBuild element
include('elements/gcp/DeveloperTools/GcpCloudBuild')
GcpCloudBuild('element', 'Cloud Build', 'an optional tech field')
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

' loads the GcpCloudBuild element
include('elements/gcp/DeveloperTools/GcpCloudBuild')
GcpCloudBuild('element', 'Cloud Build', 'an optional tech field')
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

' loads the GcpCloudBuild card
include('elements/gcp/DeveloperTools/GcpCloudBuild')
GcpCloudBuildCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpCloudBuild card
include('elements/gcp/DeveloperTools/GcpCloudBuild')
GcpCloudBuildCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
