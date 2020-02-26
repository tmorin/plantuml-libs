# MaterialsRadioButtonChecked
```text
elements/materials/Toggle/MaterialsRadioButtonChecked
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsRadioButtonChecked icon](../../../icons/materials/Toggle/MaterialsRadioButtonChecked.png) | ![MaterialsRadioButtonChecked element](MaterialsRadioButtonChecked.element.png) | ![MaterialsRadioButtonChecked card](MaterialsRadioButtonChecked.card.png) |
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

' loads the MaterialsRadioButtonChecked element
include('elements/materials/Toggle/MaterialsRadioButtonChecked')
MaterialsRadioButtonChecked('element', 'Radio Button Checked', 'an optional tech field')
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

' loads the MaterialsRadioButtonChecked element
include('elements/materials/Toggle/MaterialsRadioButtonChecked')
MaterialsRadioButtonChecked('element', 'Radio Button Checked', 'an optional tech field')
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

' loads the MaterialsRadioButtonChecked card
include('elements/materials/Toggle/MaterialsRadioButtonChecked')
MaterialsRadioButtonCheckedCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsRadioButtonChecked card
include('elements/materials/Toggle/MaterialsRadioButtonChecked')
MaterialsRadioButtonCheckedCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
