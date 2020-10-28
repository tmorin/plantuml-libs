# GcpCloudSecurityScanner
```text
elements/gcp/Security/GcpCloudSecurityScanner
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpCloudSecurityScanner icon](../../../icons/gcp/Security/GcpCloudSecurityScanner.png) | ![GcpCloudSecurityScanner element](GcpCloudSecurityScanner.element.png) | ![GcpCloudSecurityScanner card](GcpCloudSecurityScanner.card.png) |
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

' loads the GcpCloudSecurityScanner element
include('elements/gcp/Security/GcpCloudSecurityScanner')
GcpCloudSecurityScanner('element', 'Cloud Security Scanner', 'an optional tech field')
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

' loads the GcpCloudSecurityScanner element
include('elements/gcp/Security/GcpCloudSecurityScanner')
GcpCloudSecurityScanner('element', 'Cloud Security Scanner', 'an optional tech field')
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

' loads the GcpCloudSecurityScanner card
include('elements/gcp/Security/GcpCloudSecurityScanner')
GcpCloudSecurityScannerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpCloudSecurityScanner card
include('elements/gcp/Security/GcpCloudSecurityScanner')
GcpCloudSecurityScannerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
