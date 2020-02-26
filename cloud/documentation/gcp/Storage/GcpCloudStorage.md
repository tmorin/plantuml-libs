# GcpCloudStorage
```text
elements/gcp/Storage/GcpCloudStorage
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpCloudStorage icon](../../../icons/gcp/Storage/GcpCloudStorage.png) | ![GcpCloudStorage element](GcpCloudStorage.element.png) | ![GcpCloudStorage card](GcpCloudStorage.card.png) |
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

' loads the GcpCloudStorage element
include('elements/gcp/Storage/GcpCloudStorage')
GcpCloudStorage('element', 'Cloud Storage', 'an optional tech field')
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

' loads the GcpCloudStorage element
include('elements/gcp/Storage/GcpCloudStorage')
GcpCloudStorage('element', 'Cloud Storage', 'an optional tech field')
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

' loads the GcpCloudStorage card
include('elements/gcp/Storage/GcpCloudStorage')
GcpCloudStorageCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpCloudStorage card
include('elements/gcp/Storage/GcpCloudStorage')
GcpCloudStorageCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
