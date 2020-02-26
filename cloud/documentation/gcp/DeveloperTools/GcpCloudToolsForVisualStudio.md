# GcpCloudToolsForVisualStudio
```text
elements/gcp/DeveloperTools/GcpCloudToolsForVisualStudio
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpCloudToolsForVisualStudio icon](../../../icons/gcp/DeveloperTools/GcpCloudToolsForVisualStudio.png) | ![GcpCloudToolsForVisualStudio element](GcpCloudToolsForVisualStudio.element.png) | ![GcpCloudToolsForVisualStudio card](GcpCloudToolsForVisualStudio.card.png) |
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

' loads the GcpCloudToolsForVisualStudio element
include('elements/gcp/DeveloperTools/GcpCloudToolsForVisualStudio')
GcpCloudToolsForVisualStudio('element', 'Cloud Tools For Visual Studio', 'an optional tech field')
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

' loads the GcpCloudToolsForVisualStudio element
include('elements/gcp/DeveloperTools/GcpCloudToolsForVisualStudio')
GcpCloudToolsForVisualStudio('element', 'Cloud Tools For Visual Studio', 'an optional tech field')
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

' loads the GcpCloudToolsForVisualStudio card
include('elements/gcp/DeveloperTools/GcpCloudToolsForVisualStudio')
GcpCloudToolsForVisualStudioCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpCloudToolsForVisualStudio card
include('elements/gcp/DeveloperTools/GcpCloudToolsForVisualStudio')
GcpCloudToolsForVisualStudioCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
