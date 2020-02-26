# GcpCloudCode
```text
elements/gcp/DeveloperTools/GcpCloudCode
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpCloudCode icon](../../../icons/gcp/DeveloperTools/GcpCloudCode.png) | ![GcpCloudCode element](GcpCloudCode.element.png) | ![GcpCloudCode card](GcpCloudCode.card.png) |
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

' loads the GcpCloudCode element
include('elements/gcp/DeveloperTools/GcpCloudCode')
GcpCloudCode('element', 'Cloud Code', 'an optional tech field')
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

' loads the GcpCloudCode element
include('elements/gcp/DeveloperTools/GcpCloudCode')
GcpCloudCode('element', 'Cloud Code', 'an optional tech field')
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

' loads the GcpCloudCode card
include('elements/gcp/DeveloperTools/GcpCloudCode')
GcpCloudCodeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpCloudCode card
include('elements/gcp/DeveloperTools/GcpCloudCode')
GcpCloudCodeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
