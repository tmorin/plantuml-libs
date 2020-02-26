# GcpCloudToolsForEclipse
```text
elements/gcp/DeveloperTools/GcpCloudToolsForEclipse
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpCloudToolsForEclipse icon](../../../icons/gcp/DeveloperTools/GcpCloudToolsForEclipse.png) | ![GcpCloudToolsForEclipse element](GcpCloudToolsForEclipse.element.png) | ![GcpCloudToolsForEclipse card](GcpCloudToolsForEclipse.card.png) |
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

' loads the GcpCloudToolsForEclipse element
include('elements/gcp/DeveloperTools/GcpCloudToolsForEclipse')
GcpCloudToolsForEclipse('element', 'Cloud Tools For Eclipse', 'an optional tech field')
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

' loads the GcpCloudToolsForEclipse element
include('elements/gcp/DeveloperTools/GcpCloudToolsForEclipse')
GcpCloudToolsForEclipse('element', 'Cloud Tools For Eclipse', 'an optional tech field')
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

' loads the GcpCloudToolsForEclipse card
include('elements/gcp/DeveloperTools/GcpCloudToolsForEclipse')
GcpCloudToolsForEclipseCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpCloudToolsForEclipse card
include('elements/gcp/DeveloperTools/GcpCloudToolsForEclipse')
GcpCloudToolsForEclipseCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
