# MaterialsLocationOff
```text
elements/materials/Communication/MaterialsLocationOff
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsLocationOff icon](../../../icons/materials/Communication/MaterialsLocationOff.png) | ![MaterialsLocationOff element](MaterialsLocationOff.element.png) | ![MaterialsLocationOff card](MaterialsLocationOff.card.png) |
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

' loads the MaterialsLocationOff element
include('elements/materials/Communication/MaterialsLocationOff')
MaterialsLocationOff('element', 'Location Off', 'an optional tech field')
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

' loads the MaterialsLocationOff element
include('elements/materials/Communication/MaterialsLocationOff')
MaterialsLocationOff('element', 'Location Off', 'an optional tech field')
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

' loads the MaterialsLocationOff card
include('elements/materials/Communication/MaterialsLocationOff')
MaterialsLocationOffCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsLocationOff card
include('elements/materials/Communication/MaterialsLocationOff')
MaterialsLocationOffCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```