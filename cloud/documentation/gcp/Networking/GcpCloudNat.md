# GcpCloudNat
```text
elements/gcp/Networking/GcpCloudNat
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpCloudNat icon](../../../icons/gcp/Networking/GcpCloudNat.png) | ![GcpCloudNat element](GcpCloudNat.element.png) | ![GcpCloudNat card](GcpCloudNat.card.png) |
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

' loads the GcpCloudNat element
include('elements/gcp/Networking/GcpCloudNat')
GcpCloudNat('element', 'Cloud Nat', 'an optional tech field')
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

' loads the GcpCloudNat element
include('elements/gcp/Networking/GcpCloudNat')
GcpCloudNat('element', 'Cloud Nat', 'an optional tech field')
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

' loads the GcpCloudNat card
include('elements/gcp/Networking/GcpCloudNat')
GcpCloudNatCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpCloudNat card
include('elements/gcp/Networking/GcpCloudNat')
GcpCloudNatCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
