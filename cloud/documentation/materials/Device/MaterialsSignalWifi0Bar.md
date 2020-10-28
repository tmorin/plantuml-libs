# MaterialsSignalWifi0Bar
```text
elements/materials/Device/MaterialsSignalWifi0Bar
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSignalWifi0Bar icon](../../../icons/materials/Device/MaterialsSignalWifi0Bar.png) | ![MaterialsSignalWifi0Bar element](MaterialsSignalWifi0Bar.element.png) | ![MaterialsSignalWifi0Bar card](MaterialsSignalWifi0Bar.card.png) |
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

' loads the MaterialsSignalWifi0Bar element
include('elements/materials/Device/MaterialsSignalWifi0Bar')
MaterialsSignalWifi0Bar('element', 'Signal Wifi0 Bar', 'an optional tech field')
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

' loads the MaterialsSignalWifi0Bar element
include('elements/materials/Device/MaterialsSignalWifi0Bar')
MaterialsSignalWifi0Bar('element', 'Signal Wifi0 Bar', 'an optional tech field')
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

' loads the MaterialsSignalWifi0Bar card
include('elements/materials/Device/MaterialsSignalWifi0Bar')
MaterialsSignalWifi0BarCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsSignalWifi0Bar card
include('elements/materials/Device/MaterialsSignalWifi0Bar')
MaterialsSignalWifi0BarCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
