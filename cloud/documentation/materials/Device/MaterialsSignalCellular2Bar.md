# MaterialsSignalCellular2Bar
```text
elements/materials/Device/MaterialsSignalCellular2Bar
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSignalCellular2Bar icon](../../../icons/materials/Device/MaterialsSignalCellular2Bar.png) | ![MaterialsSignalCellular2Bar element](MaterialsSignalCellular2Bar.element.png) | ![MaterialsSignalCellular2Bar card](MaterialsSignalCellular2Bar.card.png) |
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

' loads the MaterialsSignalCellular2Bar element
include('elements/materials/Device/MaterialsSignalCellular2Bar')
MaterialsSignalCellular2Bar('element', 'Signal Cellular2 Bar', 'an optional tech field')
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

' loads the MaterialsSignalCellular2Bar element
include('elements/materials/Device/MaterialsSignalCellular2Bar')
MaterialsSignalCellular2Bar('element', 'Signal Cellular2 Bar', 'an optional tech field')
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

' loads the MaterialsSignalCellular2Bar card
include('elements/materials/Device/MaterialsSignalCellular2Bar')
MaterialsSignalCellular2BarCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsSignalCellular2Bar card
include('elements/materials/Device/MaterialsSignalCellular2Bar')
MaterialsSignalCellular2BarCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
