# GcpCloudToolsForPowershell
```text
elements/gcp/DeveloperTools/GcpCloudToolsForPowershell
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpCloudToolsForPowershell icon](../../../icons/gcp/DeveloperTools/GcpCloudToolsForPowershell.png) | ![GcpCloudToolsForPowershell element](GcpCloudToolsForPowershell.element.png) | ![GcpCloudToolsForPowershell card](GcpCloudToolsForPowershell.card.png) |
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

' loads the GcpCloudToolsForPowershell element
include('elements/gcp/DeveloperTools/GcpCloudToolsForPowershell')
GcpCloudToolsForPowershell('element', 'Cloud Tools For Powershell', 'an optional tech field')
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

' loads the GcpCloudToolsForPowershell element
include('elements/gcp/DeveloperTools/GcpCloudToolsForPowershell')
GcpCloudToolsForPowershell('element', 'Cloud Tools For Powershell', 'an optional tech field')
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

' loads the GcpCloudToolsForPowershell card
include('elements/gcp/DeveloperTools/GcpCloudToolsForPowershell')
GcpCloudToolsForPowershellCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpCloudToolsForPowershell card
include('elements/gcp/DeveloperTools/GcpCloudToolsForPowershell')
GcpCloudToolsForPowershellCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
