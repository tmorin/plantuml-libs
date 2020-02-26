# MaterialsCheckBoxOutlineBlank
```text
elements/materials/Toggle/MaterialsCheckBoxOutlineBlank
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsCheckBoxOutlineBlank icon](../../../icons/materials/Toggle/MaterialsCheckBoxOutlineBlank.png) | ![MaterialsCheckBoxOutlineBlank element](MaterialsCheckBoxOutlineBlank.element.png) | ![MaterialsCheckBoxOutlineBlank card](MaterialsCheckBoxOutlineBlank.card.png) |
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

' loads the MaterialsCheckBoxOutlineBlank element
include('elements/materials/Toggle/MaterialsCheckBoxOutlineBlank')
MaterialsCheckBoxOutlineBlank('element', 'Check Box Outline Blank', 'an optional tech field')
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

' loads the MaterialsCheckBoxOutlineBlank element
include('elements/materials/Toggle/MaterialsCheckBoxOutlineBlank')
MaterialsCheckBoxOutlineBlank('element', 'Check Box Outline Blank', 'an optional tech field')
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

' loads the MaterialsCheckBoxOutlineBlank card
include('elements/materials/Toggle/MaterialsCheckBoxOutlineBlank')
MaterialsCheckBoxOutlineBlankCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsCheckBoxOutlineBlank card
include('elements/materials/Toggle/MaterialsCheckBoxOutlineBlank')
MaterialsCheckBoxOutlineBlankCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
