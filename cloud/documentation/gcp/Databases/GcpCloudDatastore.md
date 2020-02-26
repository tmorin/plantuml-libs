# GcpCloudDatastore
```text
elements/gcp/Databases/GcpCloudDatastore
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpCloudDatastore icon](../../../icons/gcp/Databases/GcpCloudDatastore.png) | ![GcpCloudDatastore element](GcpCloudDatastore.element.png) | ![GcpCloudDatastore card](GcpCloudDatastore.card.png) |
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

' loads the GcpCloudDatastore element
include('elements/gcp/Databases/GcpCloudDatastore')
GcpCloudDatastore('element', 'Cloud Datastore', 'an optional tech field')
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

' loads the GcpCloudDatastore element
include('elements/gcp/Databases/GcpCloudDatastore')
GcpCloudDatastore('element', 'Cloud Datastore', 'an optional tech field')
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

' loads the GcpCloudDatastore card
include('elements/gcp/Databases/GcpCloudDatastore')
GcpCloudDatastoreCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpCloudDatastore card
include('elements/gcp/Databases/GcpCloudDatastore')
GcpCloudDatastoreCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
