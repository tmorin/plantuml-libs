# GcpCloudDataCatalog
```text
elements/gcp/DataAnalytics/GcpCloudDataCatalog
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpCloudDataCatalog icon](../../../icons/gcp/DataAnalytics/GcpCloudDataCatalog.png) | ![GcpCloudDataCatalog element](GcpCloudDataCatalog.element.png) | ![GcpCloudDataCatalog card](GcpCloudDataCatalog.card.png) |
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

' loads the GcpCloudDataCatalog element
include('elements/gcp/DataAnalytics/GcpCloudDataCatalog')
GcpCloudDataCatalog('element', 'Cloud Data Catalog', 'an optional tech field')
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

' loads the GcpCloudDataCatalog element
include('elements/gcp/DataAnalytics/GcpCloudDataCatalog')
GcpCloudDataCatalog('element', 'Cloud Data Catalog', 'an optional tech field')
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

' loads the GcpCloudDataCatalog card
include('elements/gcp/DataAnalytics/GcpCloudDataCatalog')
GcpCloudDataCatalogCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpCloudDataCatalog card
include('elements/gcp/DataAnalytics/GcpCloudDataCatalog')
GcpCloudDataCatalogCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
