# MaterialsSignalWifi1BarLock
```text
elements/materials/Device/MaterialsSignalWifi1BarLock
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSignalWifi1BarLock icon](../../../icons/materials/Device/MaterialsSignalWifi1BarLock.png) | ![MaterialsSignalWifi1BarLock element](MaterialsSignalWifi1BarLock.element.png) | ![MaterialsSignalWifi1BarLock card](MaterialsSignalWifi1BarLock.card.png) |
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

' loads the MaterialsSignalWifi1BarLock element
include('elements/materials/Device/MaterialsSignalWifi1BarLock')
MaterialsSignalWifi1BarLock('element', 'Signal Wifi1 Bar Lock', 'an optional tech field')
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

' loads the MaterialsSignalWifi1BarLock element
include('elements/materials/Device/MaterialsSignalWifi1BarLock')
MaterialsSignalWifi1BarLock('element', 'Signal Wifi1 Bar Lock', 'an optional tech field')
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

' loads the MaterialsSignalWifi1BarLock card
include('elements/materials/Device/MaterialsSignalWifi1BarLock')
MaterialsSignalWifi1BarLockCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsSignalWifi1BarLock card
include('elements/materials/Device/MaterialsSignalWifi1BarLock')
MaterialsSignalWifi1BarLockCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
