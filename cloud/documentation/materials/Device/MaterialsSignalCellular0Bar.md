# MaterialsSignalCellular0Bar
```text
elements/materials/Device/MaterialsSignalCellular0Bar
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSignalCellular0Bar icon](../../../icons/materials/Device/MaterialsSignalCellular0Bar.png) | ![MaterialsSignalCellular0Bar element](MaterialsSignalCellular0Bar.element.png) | ![MaterialsSignalCellular0Bar card](MaterialsSignalCellular0Bar.card.png) |
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

' loads the MaterialsSignalCellular0Bar element
include('elements/materials/Device/MaterialsSignalCellular0Bar')
MaterialsSignalCellular0Bar('element', 'Signal Cellular0 Bar', 'an optional tech field')
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

' loads the MaterialsSignalCellular0Bar element
include('elements/materials/Device/MaterialsSignalCellular0Bar')
MaterialsSignalCellular0Bar('element', 'Signal Cellular0 Bar', 'an optional tech field')
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

' loads the MaterialsSignalCellular0Bar card
include('elements/materials/Device/MaterialsSignalCellular0Bar')
MaterialsSignalCellular0BarCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsSignalCellular0Bar card
include('elements/materials/Device/MaterialsSignalCellular0Bar')
MaterialsSignalCellular0BarCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
