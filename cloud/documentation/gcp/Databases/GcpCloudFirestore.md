# GcpCloudFirestore
```text
elements/gcp/Databases/GcpCloudFirestore
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpCloudFirestore icon](../../../icons/gcp/Databases/GcpCloudFirestore.png) | ![GcpCloudFirestore element](GcpCloudFirestore.element.png) | ![GcpCloudFirestore card](GcpCloudFirestore.card.png) |
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

' loads the GcpCloudFirestore element
include('elements/gcp/Databases/GcpCloudFirestore')
GcpCloudFirestore('element', 'Cloud Firestore', 'an optional tech field')
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

' loads the GcpCloudFirestore element
include('elements/gcp/Databases/GcpCloudFirestore')
GcpCloudFirestore('element', 'Cloud Firestore', 'an optional tech field')
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

' loads the GcpCloudFirestore card
include('elements/gcp/Databases/GcpCloudFirestore')
GcpCloudFirestoreCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpCloudFirestore card
include('elements/gcp/Databases/GcpCloudFirestore')
GcpCloudFirestoreCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
