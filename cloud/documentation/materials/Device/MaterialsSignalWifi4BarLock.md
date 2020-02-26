# MaterialsSignalWifi4BarLock
```text
elements/materials/Device/MaterialsSignalWifi4BarLock
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSignalWifi4BarLock icon](../../../icons/materials/Device/MaterialsSignalWifi4BarLock.png) | ![MaterialsSignalWifi4BarLock element](MaterialsSignalWifi4BarLock.element.png) | ![MaterialsSignalWifi4BarLock card](MaterialsSignalWifi4BarLock.card.png) |
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

' loads the MaterialsSignalWifi4BarLock element
include('elements/materials/Device/MaterialsSignalWifi4BarLock')
MaterialsSignalWifi4BarLock('element', 'Signal Wifi4 Bar Lock', 'an optional tech field')
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

' loads the MaterialsSignalWifi4BarLock element
include('elements/materials/Device/MaterialsSignalWifi4BarLock')
MaterialsSignalWifi4BarLock('element', 'Signal Wifi4 Bar Lock', 'an optional tech field')
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

' loads the MaterialsSignalWifi4BarLock card
include('elements/materials/Device/MaterialsSignalWifi4BarLock')
MaterialsSignalWifi4BarLockCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsSignalWifi4BarLock card
include('elements/materials/Device/MaterialsSignalWifi4BarLock')
MaterialsSignalWifi4BarLockCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
