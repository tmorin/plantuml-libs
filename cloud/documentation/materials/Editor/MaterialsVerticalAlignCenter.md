# MaterialsVerticalAlignCenter
```text
elements/materials/Editor/MaterialsVerticalAlignCenter
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsVerticalAlignCenter icon](../../../icons/materials/Editor/MaterialsVerticalAlignCenter.png) | ![MaterialsVerticalAlignCenter element](MaterialsVerticalAlignCenter.element.png) | ![MaterialsVerticalAlignCenter card](MaterialsVerticalAlignCenter.card.png) |
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

' loads the MaterialsVerticalAlignCenter element
include('elements/materials/Editor/MaterialsVerticalAlignCenter')
MaterialsVerticalAlignCenter('element', 'Vertical Align Center', 'an optional tech field')
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

' loads the MaterialsVerticalAlignCenter element
include('elements/materials/Editor/MaterialsVerticalAlignCenter')
MaterialsVerticalAlignCenter('element', 'Vertical Align Center', 'an optional tech field')
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

' loads the MaterialsVerticalAlignCenter card
include('elements/materials/Editor/MaterialsVerticalAlignCenter')
MaterialsVerticalAlignCenterCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsVerticalAlignCenter card
include('elements/materials/Editor/MaterialsVerticalAlignCenter')
MaterialsVerticalAlignCenterCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
