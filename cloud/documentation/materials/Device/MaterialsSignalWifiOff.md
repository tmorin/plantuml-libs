# MaterialsSignalWifiOff
```text
elements/materials/Device/MaterialsSignalWifiOff
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSignalWifiOff icon](../../../icons/materials/Device/MaterialsSignalWifiOff.png) | ![MaterialsSignalWifiOff element](MaterialsSignalWifiOff.element.png) | ![MaterialsSignalWifiOff card](MaterialsSignalWifiOff.card.png) |
## Element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="v1.x"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/materials')

' loads the MaterialsSignalWifiOff element
include('elements/materials/Device/MaterialsSignalWifiOff')
MaterialsSignalWifiOff('element', 'Signal Wifi Off', 'an optional tech field')
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

' loads the MaterialsSignalWifiOff element
include('elements/materials/Device/MaterialsSignalWifiOff')
MaterialsSignalWifiOff('element', 'Signal Wifi Off', 'an optional tech field')
@enduml
```
## Card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BRANCH="v1.x"
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/" + $LIB_BRANCH + "/cloud"

' loads the library
!includeurl $LIB_BASE_LOCATION/library.puml

' loads the style
include('styles/materials')

' loads the MaterialsSignalWifiOff card
include('elements/materials/Device/MaterialsSignalWifiOff')
MaterialsSignalWifiOffCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsSignalWifiOff card
include('elements/materials/Device/MaterialsSignalWifiOff')
MaterialsSignalWifiOffCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```