# MaterialsGpsOff
```text
elements/materials/Device/MaterialsGpsOff
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsGpsOff icon](../../../icons/materials/Device/MaterialsGpsOff.png) | ![MaterialsGpsOff element](MaterialsGpsOff.element.png) | ![MaterialsGpsOff card](MaterialsGpsOff.card.png) |
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

' loads the MaterialsGpsOff element
include('elements/materials/Device/MaterialsGpsOff')
MaterialsGpsOff('element', 'Gps Off', 'an optional tech field')
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

' loads the MaterialsGpsOff element
include('elements/materials/Device/MaterialsGpsOff')
MaterialsGpsOff('element', 'Gps Off', 'an optional tech field')
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

' loads the MaterialsGpsOff card
include('elements/materials/Device/MaterialsGpsOff')
MaterialsGpsOffCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsGpsOff card
include('elements/materials/Device/MaterialsGpsOff')
MaterialsGpsOffCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
