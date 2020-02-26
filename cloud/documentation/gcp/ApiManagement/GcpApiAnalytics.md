# GcpApiAnalytics
```text
elements/gcp/ApiManagement/GcpApiAnalytics
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpApiAnalytics icon](../../../icons/gcp/ApiManagement/GcpApiAnalytics.png) | ![GcpApiAnalytics element](GcpApiAnalytics.element.png) | ![GcpApiAnalytics card](GcpApiAnalytics.card.png) |
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

' loads the GcpApiAnalytics element
include('elements/gcp/ApiManagement/GcpApiAnalytics')
GcpApiAnalytics('element', 'Api Analytics', 'an optional tech field')
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

' loads the GcpApiAnalytics element
include('elements/gcp/ApiManagement/GcpApiAnalytics')
GcpApiAnalytics('element', 'Api Analytics', 'an optional tech field')
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

' loads the GcpApiAnalytics card
include('elements/gcp/ApiManagement/GcpApiAnalytics')
GcpApiAnalyticsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpApiAnalytics card
include('elements/gcp/ApiManagement/GcpApiAnalytics')
GcpApiAnalyticsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
