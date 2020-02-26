# MaterialsSignalWifi3BarLock
```text
elements/materials/Device/MaterialsSignalWifi3BarLock
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSignalWifi3BarLock icon](../../../icons/materials/Device/MaterialsSignalWifi3BarLock.png) | ![MaterialsSignalWifi3BarLock element](MaterialsSignalWifi3BarLock.element.png) | ![MaterialsSignalWifi3BarLock card](MaterialsSignalWifi3BarLock.card.png) |
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
include('styles/materials')

' loads the MaterialsSignalWifi3BarLock element
include('elements/materials/Device/MaterialsSignalWifi3BarLock')
MaterialsSignalWifi3BarLock('element', 'Signal Wifi3 Bar Lock', 'an optional tech field')
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
include('styles/materials')

' loads the MaterialsSignalWifi3BarLock element
include('elements/materials/Device/MaterialsSignalWifi3BarLock')
MaterialsSignalWifi3BarLock('element', 'Signal Wifi3 Bar Lock', 'an optional tech field')
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
include('styles/materials')

' loads the MaterialsSignalWifi3BarLock card
include('elements/materials/Device/MaterialsSignalWifi3BarLock')
MaterialsSignalWifi3BarLockCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
include('styles/materials')

' loads the MaterialsSignalWifi3BarLock card
include('elements/materials/Device/MaterialsSignalWifi3BarLock')
MaterialsSignalWifi3BarLockCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
