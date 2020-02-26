# GcpCloudArmor
```text
elements/gcp/Networking/GcpCloudArmor
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![GcpCloudArmor icon](../../../icons/gcp/Networking/GcpCloudArmor.png) | ![GcpCloudArmor element](GcpCloudArmor.element.png) | ![GcpCloudArmor card](GcpCloudArmor.card.png) |
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

' loads the GcpCloudArmor element
include('elements/gcp/Networking/GcpCloudArmor')
GcpCloudArmor('element', 'Cloud Armor', 'an optional tech field')
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

' loads the GcpCloudArmor element
include('elements/gcp/Networking/GcpCloudArmor')
GcpCloudArmor('element', 'Cloud Armor', 'an optional tech field')
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

' loads the GcpCloudArmor card
include('elements/gcp/Networking/GcpCloudArmor')
GcpCloudArmorCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GcpCloudArmor card
include('elements/gcp/Networking/GcpCloudArmor')
GcpCloudArmorCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
