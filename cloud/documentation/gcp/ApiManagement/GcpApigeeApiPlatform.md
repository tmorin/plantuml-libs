# GcpApigeeApiPlatform
```text
elements/gcp/ApiManagement/GcpApigeeApiPlatform
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpApigeeApiPlatform icon](../../../icons/gcp/ApiManagement/GcpApigeeApiPlatform.png) | ![GcpApigeeApiPlatform element](GcpApigeeApiPlatform.element.png) | ![GcpApigeeApiPlatform card](GcpApigeeApiPlatform.card.png) |
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

' loads the GcpApigeeApiPlatform element
include('elements/gcp/ApiManagement/GcpApigeeApiPlatform')
GcpApigeeApiPlatform('element', 'Apigee Api Platform', 'an optional tech field')
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

' loads the GcpApigeeApiPlatform element
include('elements/gcp/ApiManagement/GcpApigeeApiPlatform')
GcpApigeeApiPlatform('element', 'Apigee Api Platform', 'an optional tech field')
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

' loads the GcpApigeeApiPlatform card
include('elements/gcp/ApiManagement/GcpApigeeApiPlatform')
GcpApigeeApiPlatformCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpApigeeApiPlatform card
include('elements/gcp/ApiManagement/GcpApigeeApiPlatform')
GcpApigeeApiPlatformCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
