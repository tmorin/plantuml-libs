# MaterialsBattery90
```text
elements/materials/Device/MaterialsBattery90
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsBattery90 icon](../../../icons/materials/Device/MaterialsBattery90.png) | ![MaterialsBattery90 element](MaterialsBattery90.element.png) | ![MaterialsBattery90 card](MaterialsBattery90.card.png) |
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

' loads the MaterialsBattery90 element
include('elements/materials/Device/MaterialsBattery90')
MaterialsBattery90('element', 'Battery90', 'an optional tech field')
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

' loads the MaterialsBattery90 element
include('elements/materials/Device/MaterialsBattery90')
MaterialsBattery90('element', 'Battery90', 'an optional tech field')
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

' loads the MaterialsBattery90 card
include('elements/materials/Device/MaterialsBattery90')
MaterialsBattery90Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsBattery90 card
include('elements/materials/Device/MaterialsBattery90')
MaterialsBattery90Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
