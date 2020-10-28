# MaterialsSignalCellularNull
```text
elements/materials/Device/MaterialsSignalCellularNull
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSignalCellularNull icon](../../../icons/materials/Device/MaterialsSignalCellularNull.png) | ![MaterialsSignalCellularNull element](MaterialsSignalCellularNull.element.png) | ![MaterialsSignalCellularNull card](MaterialsSignalCellularNull.card.png) |
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

' loads the MaterialsSignalCellularNull element
include('elements/materials/Device/MaterialsSignalCellularNull')
MaterialsSignalCellularNull('element', 'Signal Cellular Null', 'an optional tech field')
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

' loads the MaterialsSignalCellularNull element
include('elements/materials/Device/MaterialsSignalCellularNull')
MaterialsSignalCellularNull('element', 'Signal Cellular Null', 'an optional tech field')
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

' loads the MaterialsSignalCellularNull card
include('elements/materials/Device/MaterialsSignalCellularNull')
MaterialsSignalCellularNullCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsSignalCellularNull card
include('elements/materials/Device/MaterialsSignalCellularNull')
MaterialsSignalCellularNullCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
