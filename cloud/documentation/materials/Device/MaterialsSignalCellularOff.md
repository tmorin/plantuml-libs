# MaterialsSignalCellularOff
```text
elements/materials/Device/MaterialsSignalCellularOff
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsSignalCellularOff icon](../../../icons/materials/Device/MaterialsSignalCellularOff.png) | ![MaterialsSignalCellularOff element](MaterialsSignalCellularOff.element.png) | ![MaterialsSignalCellularOff card](MaterialsSignalCellularOff.card.png) |
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

' loads the MaterialsSignalCellularOff element
include('elements/materials/Device/MaterialsSignalCellularOff')
MaterialsSignalCellularOff('element', 'Signal Cellular Off', 'an optional tech field')
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

' loads the MaterialsSignalCellularOff element
include('elements/materials/Device/MaterialsSignalCellularOff')
MaterialsSignalCellularOff('element', 'Signal Cellular Off', 'an optional tech field')
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

' loads the MaterialsSignalCellularOff card
include('elements/materials/Device/MaterialsSignalCellularOff')
MaterialsSignalCellularOffCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsSignalCellularOff card
include('elements/materials/Device/MaterialsSignalCellularOff')
MaterialsSignalCellularOffCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
