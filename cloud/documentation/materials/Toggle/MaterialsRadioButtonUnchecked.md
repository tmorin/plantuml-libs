# MaterialsRadioButtonUnchecked
```text
elements/materials/Toggle/MaterialsRadioButtonUnchecked
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsRadioButtonUnchecked icon](../../../icons/materials/Toggle/MaterialsRadioButtonUnchecked.png) | ![MaterialsRadioButtonUnchecked element](MaterialsRadioButtonUnchecked.element.png) | ![MaterialsRadioButtonUnchecked card](MaterialsRadioButtonUnchecked.card.png) |
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

' loads the MaterialsRadioButtonUnchecked element
include('elements/materials/Toggle/MaterialsRadioButtonUnchecked')
MaterialsRadioButtonUnchecked('element', 'Radio Button Unchecked', 'an optional tech field')
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

' loads the MaterialsRadioButtonUnchecked element
include('elements/materials/Toggle/MaterialsRadioButtonUnchecked')
MaterialsRadioButtonUnchecked('element', 'Radio Button Unchecked', 'an optional tech field')
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

' loads the MaterialsRadioButtonUnchecked card
include('elements/materials/Toggle/MaterialsRadioButtonUnchecked')
MaterialsRadioButtonUncheckedCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsRadioButtonUnchecked card
include('elements/materials/Toggle/MaterialsRadioButtonUnchecked')
MaterialsRadioButtonUncheckedCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
