# GcpCloudFunctions
```text
elements/gcp/Compute/GcpCloudFunctions
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpCloudFunctions icon](../../../icons/gcp/Compute/GcpCloudFunctions.png) | ![GcpCloudFunctions element](GcpCloudFunctions.element.png) | ![GcpCloudFunctions card](GcpCloudFunctions.card.png) |
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

' loads the GcpCloudFunctions element
include('elements/gcp/Compute/GcpCloudFunctions')
GcpCloudFunctions('element', 'Cloud Functions', 'an optional tech field')
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

' loads the GcpCloudFunctions element
include('elements/gcp/Compute/GcpCloudFunctions')
GcpCloudFunctions('element', 'Cloud Functions', 'an optional tech field')
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

' loads the GcpCloudFunctions card
include('elements/gcp/Compute/GcpCloudFunctions')
GcpCloudFunctionsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpCloudFunctions card
include('elements/gcp/Compute/GcpCloudFunctions')
GcpCloudFunctionsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
