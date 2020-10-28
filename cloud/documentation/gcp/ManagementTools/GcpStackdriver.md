# GcpStackdriver
```text
elements/gcp/ManagementTools/GcpStackdriver
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpStackdriver icon](../../../icons/gcp/ManagementTools/GcpStackdriver.png) | ![GcpStackdriver element](GcpStackdriver.element.png) | ![GcpStackdriver card](GcpStackdriver.card.png) |
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

' loads the GcpStackdriver element
include('elements/gcp/ManagementTools/GcpStackdriver')
GcpStackdriver('element', 'Stackdriver', 'an optional tech field')
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

' loads the GcpStackdriver element
include('elements/gcp/ManagementTools/GcpStackdriver')
GcpStackdriver('element', 'Stackdriver', 'an optional tech field')
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

' loads the GcpStackdriver card
include('elements/gcp/ManagementTools/GcpStackdriver')
GcpStackdriverCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpStackdriver card
include('elements/gcp/ManagementTools/GcpStackdriver')
GcpStackdriverCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
