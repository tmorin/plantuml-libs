# MaterialsBrightnessHigh
```text
elements/materials/Device/MaterialsBrightnessHigh
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsBrightnessHigh icon](../../../icons/materials/Device/MaterialsBrightnessHigh.png) | ![MaterialsBrightnessHigh element](MaterialsBrightnessHigh.element.png) | ![MaterialsBrightnessHigh card](MaterialsBrightnessHigh.card.png) |
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

' loads the MaterialsBrightnessHigh element
include('elements/materials/Device/MaterialsBrightnessHigh')
MaterialsBrightnessHigh('element', 'Brightness High', 'an optional tech field')
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

' loads the MaterialsBrightnessHigh element
include('elements/materials/Device/MaterialsBrightnessHigh')
MaterialsBrightnessHigh('element', 'Brightness High', 'an optional tech field')
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

' loads the MaterialsBrightnessHigh card
include('elements/materials/Device/MaterialsBrightnessHigh')
MaterialsBrightnessHighCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsBrightnessHigh card
include('elements/materials/Device/MaterialsBrightnessHigh')
MaterialsBrightnessHighCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```