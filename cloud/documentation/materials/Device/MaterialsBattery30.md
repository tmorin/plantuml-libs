# MaterialsBattery30
```text
elements/materials/Device/MaterialsBattery30
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsBattery30 icon](../../../icons/materials/Device/MaterialsBattery30.png) | ![MaterialsBattery30 element](MaterialsBattery30.element.png) | ![MaterialsBattery30 card](MaterialsBattery30.card.png) |
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

' loads the MaterialsBattery30 element
include('elements/materials/Device/MaterialsBattery30')
MaterialsBattery30('element', 'Battery30', 'an optional tech field')
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

' loads the MaterialsBattery30 element
include('elements/materials/Device/MaterialsBattery30')
MaterialsBattery30('element', 'Battery30', 'an optional tech field')
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

' loads the MaterialsBattery30 card
include('elements/materials/Device/MaterialsBattery30')
MaterialsBattery30Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsBattery30 card
include('elements/materials/Device/MaterialsBattery30')
MaterialsBattery30Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
