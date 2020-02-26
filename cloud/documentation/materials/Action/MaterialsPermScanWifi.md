# MaterialsPermScanWifi
```text
elements/materials/Action/MaterialsPermScanWifi
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsPermScanWifi icon](../../../icons/materials/Action/MaterialsPermScanWifi.png) | ![MaterialsPermScanWifi element](MaterialsPermScanWifi.element.png) | ![MaterialsPermScanWifi card](MaterialsPermScanWifi.card.png) |
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

' loads the MaterialsPermScanWifi element
include('elements/materials/Action/MaterialsPermScanWifi')
MaterialsPermScanWifi('element', 'Perm Scan Wifi', 'an optional tech field')
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

' loads the MaterialsPermScanWifi element
include('elements/materials/Action/MaterialsPermScanWifi')
MaterialsPermScanWifi('element', 'Perm Scan Wifi', 'an optional tech field')
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

' loads the MaterialsPermScanWifi card
include('elements/materials/Action/MaterialsPermScanWifi')
MaterialsPermScanWifiCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsPermScanWifi card
include('elements/materials/Action/MaterialsPermScanWifi')
MaterialsPermScanWifiCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
