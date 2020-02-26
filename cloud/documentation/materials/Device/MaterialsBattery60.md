# MaterialsBattery60
```text
elements/materials/Device/MaterialsBattery60
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsBattery60 icon](../../../icons/materials/Device/MaterialsBattery60.png) | ![MaterialsBattery60 element](MaterialsBattery60.element.png) | ![MaterialsBattery60 card](MaterialsBattery60.card.png) |
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

' loads the MaterialsBattery60 element
include('elements/materials/Device/MaterialsBattery60')
MaterialsBattery60('element', 'Battery60', 'an optional tech field')
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

' loads the MaterialsBattery60 element
include('elements/materials/Device/MaterialsBattery60')
MaterialsBattery60('element', 'Battery60', 'an optional tech field')
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

' loads the MaterialsBattery60 card
include('elements/materials/Device/MaterialsBattery60')
MaterialsBattery60Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsBattery60 card
include('elements/materials/Device/MaterialsBattery60')
MaterialsBattery60Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
