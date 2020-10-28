# MaterialsSignalCellularNoSim
```text
elements/materials/Device/MaterialsSignalCellularNoSim
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSignalCellularNoSim icon](../../../icons/materials/Device/MaterialsSignalCellularNoSim.png) | ![MaterialsSignalCellularNoSim element](MaterialsSignalCellularNoSim.element.png) | ![MaterialsSignalCellularNoSim card](MaterialsSignalCellularNoSim.card.png) |
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

' loads the MaterialsSignalCellularNoSim element
include('elements/materials/Device/MaterialsSignalCellularNoSim')
MaterialsSignalCellularNoSim('element', 'Signal Cellular No Sim', 'an optional tech field')
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

' loads the MaterialsSignalCellularNoSim element
include('elements/materials/Device/MaterialsSignalCellularNoSim')
MaterialsSignalCellularNoSim('element', 'Signal Cellular No Sim', 'an optional tech field')
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

' loads the MaterialsSignalCellularNoSim card
include('elements/materials/Device/MaterialsSignalCellularNoSim')
MaterialsSignalCellularNoSimCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsSignalCellularNoSim card
include('elements/materials/Device/MaterialsSignalCellularNoSim')
MaterialsSignalCellularNoSimCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
