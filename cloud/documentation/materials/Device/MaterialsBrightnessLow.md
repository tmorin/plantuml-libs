# MaterialsBrightnessLow
```text
elements/materials/Device/MaterialsBrightnessLow
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsBrightnessLow icon](../../../icons/materials/Device/MaterialsBrightnessLow.png) | ![MaterialsBrightnessLow element](MaterialsBrightnessLow.element.png) | ![MaterialsBrightnessLow card](MaterialsBrightnessLow.card.png) |
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

' loads the MaterialsBrightnessLow element
include('elements/materials/Device/MaterialsBrightnessLow')
MaterialsBrightnessLow('element', 'Brightness Low', 'an optional tech field')
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

' loads the MaterialsBrightnessLow element
include('elements/materials/Device/MaterialsBrightnessLow')
MaterialsBrightnessLow('element', 'Brightness Low', 'an optional tech field')
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

' loads the MaterialsBrightnessLow card
include('elements/materials/Device/MaterialsBrightnessLow')
MaterialsBrightnessLowCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsBrightnessLow card
include('elements/materials/Device/MaterialsBrightnessLow')
MaterialsBrightnessLowCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
