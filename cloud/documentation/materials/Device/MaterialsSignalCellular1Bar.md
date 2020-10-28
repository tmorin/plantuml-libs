# MaterialsSignalCellular1Bar
```text
elements/materials/Device/MaterialsSignalCellular1Bar
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSignalCellular1Bar icon](../../../icons/materials/Device/MaterialsSignalCellular1Bar.png) | ![MaterialsSignalCellular1Bar element](MaterialsSignalCellular1Bar.element.png) | ![MaterialsSignalCellular1Bar card](MaterialsSignalCellular1Bar.card.png) |
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

' loads the MaterialsSignalCellular1Bar element
include('elements/materials/Device/MaterialsSignalCellular1Bar')
MaterialsSignalCellular1Bar('element', 'Signal Cellular1 Bar', 'an optional tech field')
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

' loads the MaterialsSignalCellular1Bar element
include('elements/materials/Device/MaterialsSignalCellular1Bar')
MaterialsSignalCellular1Bar('element', 'Signal Cellular1 Bar', 'an optional tech field')
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

' loads the MaterialsSignalCellular1Bar card
include('elements/materials/Device/MaterialsSignalCellular1Bar')
MaterialsSignalCellular1BarCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsSignalCellular1Bar card
include('elements/materials/Device/MaterialsSignalCellular1Bar')
MaterialsSignalCellular1BarCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
