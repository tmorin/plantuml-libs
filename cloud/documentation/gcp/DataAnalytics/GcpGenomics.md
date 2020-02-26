# GcpGenomics
```text
elements/gcp/DataAnalytics/GcpGenomics
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpGenomics icon](../../../icons/gcp/DataAnalytics/GcpGenomics.png) | ![GcpGenomics element](GcpGenomics.element.png) | ![GcpGenomics card](GcpGenomics.card.png) |
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

' loads the GcpGenomics element
include('elements/gcp/DataAnalytics/GcpGenomics')
GcpGenomics('element', 'Genomics', 'an optional tech field')
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

' loads the GcpGenomics element
include('elements/gcp/DataAnalytics/GcpGenomics')
GcpGenomics('element', 'Genomics', 'an optional tech field')
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

' loads the GcpGenomics card
include('elements/gcp/DataAnalytics/GcpGenomics')
GcpGenomicsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpGenomics card
include('elements/gcp/DataAnalytics/GcpGenomics')
GcpGenomicsCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
