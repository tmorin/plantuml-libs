# MaterialsSignalWifi2BarLock
```text
elements/materials/Device/MaterialsSignalWifi2BarLock
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSignalWifi2BarLock icon](../../../icons/materials/Device/MaterialsSignalWifi2BarLock.png) | ![MaterialsSignalWifi2BarLock element](MaterialsSignalWifi2BarLock.element.png) | ![MaterialsSignalWifi2BarLock card](MaterialsSignalWifi2BarLock.card.png) |
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

' loads the MaterialsSignalWifi2BarLock element
include('elements/materials/Device/MaterialsSignalWifi2BarLock')
MaterialsSignalWifi2BarLock('element', 'Signal Wifi2 Bar Lock', 'an optional tech field')
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

' loads the MaterialsSignalWifi2BarLock element
include('elements/materials/Device/MaterialsSignalWifi2BarLock')
MaterialsSignalWifi2BarLock('element', 'Signal Wifi2 Bar Lock', 'an optional tech field')
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

' loads the MaterialsSignalWifi2BarLock card
include('elements/materials/Device/MaterialsSignalWifi2BarLock')
MaterialsSignalWifi2BarLockCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsSignalWifi2BarLock card
include('elements/materials/Device/MaterialsSignalWifi2BarLock')
MaterialsSignalWifi2BarLockCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
