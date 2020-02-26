# GcpErrorReporting
```text
elements/gcp/ManagementTools/GcpErrorReporting
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpErrorReporting icon](../../../icons/gcp/ManagementTools/GcpErrorReporting.png) | ![GcpErrorReporting element](GcpErrorReporting.element.png) | ![GcpErrorReporting card](GcpErrorReporting.card.png) |
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

' loads the GcpErrorReporting element
include('elements/gcp/ManagementTools/GcpErrorReporting')
GcpErrorReporting('element', 'Error Reporting', 'an optional tech field')
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

' loads the GcpErrorReporting element
include('elements/gcp/ManagementTools/GcpErrorReporting')
GcpErrorReporting('element', 'Error Reporting', 'an optional tech field')
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

' loads the GcpErrorReporting card
include('elements/gcp/ManagementTools/GcpErrorReporting')
GcpErrorReportingCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpErrorReporting card
include('elements/gcp/ManagementTools/GcpErrorReporting')
GcpErrorReportingCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
