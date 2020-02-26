# MaterialsSignalCellular3Bar
```text
elements/materials/Device/MaterialsSignalCellular3Bar
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSignalCellular3Bar icon](../../../icons/materials/Device/MaterialsSignalCellular3Bar.png) | ![MaterialsSignalCellular3Bar element](MaterialsSignalCellular3Bar.element.png) | ![MaterialsSignalCellular3Bar card](MaterialsSignalCellular3Bar.card.png) |
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

' loads the MaterialsSignalCellular3Bar element
include('elements/materials/Device/MaterialsSignalCellular3Bar')
MaterialsSignalCellular3Bar('element', 'Signal Cellular3 Bar', 'an optional tech field')
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

' loads the MaterialsSignalCellular3Bar element
include('elements/materials/Device/MaterialsSignalCellular3Bar')
MaterialsSignalCellular3Bar('element', 'Signal Cellular3 Bar', 'an optional tech field')
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

' loads the MaterialsSignalCellular3Bar card
include('elements/materials/Device/MaterialsSignalCellular3Bar')
MaterialsSignalCellular3BarCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsSignalCellular3Bar card
include('elements/materials/Device/MaterialsSignalCellular3Bar')
MaterialsSignalCellular3BarCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
