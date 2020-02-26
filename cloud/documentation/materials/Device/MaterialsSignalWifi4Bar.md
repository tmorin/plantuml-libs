# MaterialsSignalWifi4Bar
```text
elements/materials/Device/MaterialsSignalWifi4Bar
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSignalWifi4Bar icon](../../../icons/materials/Device/MaterialsSignalWifi4Bar.png) | ![MaterialsSignalWifi4Bar element](MaterialsSignalWifi4Bar.element.png) | ![MaterialsSignalWifi4Bar card](MaterialsSignalWifi4Bar.card.png) |
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

' loads the MaterialsSignalWifi4Bar element
include('elements/materials/Device/MaterialsSignalWifi4Bar')
MaterialsSignalWifi4Bar('element', 'Signal Wifi4 Bar', 'an optional tech field')
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

' loads the MaterialsSignalWifi4Bar element
include('elements/materials/Device/MaterialsSignalWifi4Bar')
MaterialsSignalWifi4Bar('element', 'Signal Wifi4 Bar', 'an optional tech field')
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

' loads the MaterialsSignalWifi4Bar card
include('elements/materials/Device/MaterialsSignalWifi4Bar')
MaterialsSignalWifi4BarCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsSignalWifi4Bar card
include('elements/materials/Device/MaterialsSignalWifi4Bar')
MaterialsSignalWifi4BarCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
