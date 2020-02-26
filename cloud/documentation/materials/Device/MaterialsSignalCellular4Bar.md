# MaterialsSignalCellular4Bar
```text
elements/materials/Device/MaterialsSignalCellular4Bar
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSignalCellular4Bar icon](../../../icons/materials/Device/MaterialsSignalCellular4Bar.png) | ![MaterialsSignalCellular4Bar element](MaterialsSignalCellular4Bar.element.png) | ![MaterialsSignalCellular4Bar card](MaterialsSignalCellular4Bar.card.png) |
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

' loads the MaterialsSignalCellular4Bar element
include('elements/materials/Device/MaterialsSignalCellular4Bar')
MaterialsSignalCellular4Bar('element', 'Signal Cellular4 Bar', 'an optional tech field')
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

' loads the MaterialsSignalCellular4Bar element
include('elements/materials/Device/MaterialsSignalCellular4Bar')
MaterialsSignalCellular4Bar('element', 'Signal Cellular4 Bar', 'an optional tech field')
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

' loads the MaterialsSignalCellular4Bar card
include('elements/materials/Device/MaterialsSignalCellular4Bar')
MaterialsSignalCellular4BarCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsSignalCellular4Bar card
include('elements/materials/Device/MaterialsSignalCellular4Bar')
MaterialsSignalCellular4BarCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
