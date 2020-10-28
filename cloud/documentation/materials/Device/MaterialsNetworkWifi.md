# MaterialsNetworkWifi
```text
elements/materials/Device/MaterialsNetworkWifi
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsNetworkWifi icon](../../../icons/materials/Device/MaterialsNetworkWifi.png) | ![MaterialsNetworkWifi element](MaterialsNetworkWifi.element.png) | ![MaterialsNetworkWifi card](MaterialsNetworkWifi.card.png) |
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

' loads the MaterialsNetworkWifi element
include('elements/materials/Device/MaterialsNetworkWifi')
MaterialsNetworkWifi('element', 'Network Wifi', 'an optional tech field')
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

' loads the MaterialsNetworkWifi element
include('elements/materials/Device/MaterialsNetworkWifi')
MaterialsNetworkWifi('element', 'Network Wifi', 'an optional tech field')
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

' loads the MaterialsNetworkWifi card
include('elements/materials/Device/MaterialsNetworkWifi')
MaterialsNetworkWifiCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsNetworkWifi card
include('elements/materials/Device/MaterialsNetworkWifi')
MaterialsNetworkWifiCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
