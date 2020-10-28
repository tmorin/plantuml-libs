# MaterialsFiberPin
```text
elements/materials/Av/MaterialsFiberPin
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsFiberPin icon](../../../icons/materials/Av/MaterialsFiberPin.png) | ![MaterialsFiberPin element](MaterialsFiberPin.element.png) | ![MaterialsFiberPin card](MaterialsFiberPin.card.png) |
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

' loads the MaterialsFiberPin element
include('elements/materials/Av/MaterialsFiberPin')
MaterialsFiberPin('element', 'Fiber Pin', 'an optional tech field')
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

' loads the MaterialsFiberPin element
include('elements/materials/Av/MaterialsFiberPin')
MaterialsFiberPin('element', 'Fiber Pin', 'an optional tech field')
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

' loads the MaterialsFiberPin card
include('elements/materials/Av/MaterialsFiberPin')
MaterialsFiberPinCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsFiberPin card
include('elements/materials/Av/MaterialsFiberPin')
MaterialsFiberPinCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
