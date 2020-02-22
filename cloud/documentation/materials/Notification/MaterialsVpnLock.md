# MaterialsVpnLock
```text
elements/materials/Notification/MaterialsVpnLock
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsVpnLock icon](../../../icons/materials/Notification/MaterialsVpnLock.png) | ![MaterialsVpnLock element](MaterialsVpnLock.element.png) | ![MaterialsVpnLock card](MaterialsVpnLock.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="master"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the AWS style
include('styles/aws')

' loads the MaterialsVpnLock element
include('elements/materials/Notification/MaterialsVpnLock')
MaterialsVpnLock('element', 'Vpn Lock', 'an optional tech field')
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

' loads the AWS style
include('styles/aws')

' loads the MaterialsVpnLock element
include('elements/materials/Notification/MaterialsVpnLock')
MaterialsVpnLock('element', 'Vpn Lock', 'an optional tech field')
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

' loads the AWS style
include('styles/gcp')

' loads the MaterialsVpnLock card
include('elements/materials/Notification/MaterialsVpnLock')
MaterialsVpnLockCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the GCP style
include('styles/gcp')

' loads the MaterialsVpnLock card
include('elements/materials/Notification/MaterialsVpnLock')
MaterialsVpnLockCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
