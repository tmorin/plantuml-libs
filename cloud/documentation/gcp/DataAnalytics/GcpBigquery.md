# GcpBigquery
```text
elements/gcp/DataAnalytics/GcpBigquery
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpBigquery icon](../../../icons/gcp/DataAnalytics/GcpBigquery.png) | ![GcpBigquery element](GcpBigquery.element.png) | ![GcpBigquery card](GcpBigquery.card.png) |
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

' loads the GcpBigquery element
include('elements/gcp/DataAnalytics/GcpBigquery')
GcpBigquery('element', 'Bigquery', 'an optional tech field')
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

' loads the GcpBigquery element
include('elements/gcp/DataAnalytics/GcpBigquery')
GcpBigquery('element', 'Bigquery', 'an optional tech field')
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

' loads the GcpBigquery card
include('elements/gcp/DataAnalytics/GcpBigquery')
GcpBigqueryCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpBigquery card
include('elements/gcp/DataAnalytics/GcpBigquery')
GcpBigqueryCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
