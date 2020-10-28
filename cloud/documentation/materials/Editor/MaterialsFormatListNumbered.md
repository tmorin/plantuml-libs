# MaterialsFormatListNumbered
```text
elements/materials/Editor/MaterialsFormatListNumbered
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsFormatListNumbered icon](../../../icons/materials/Editor/MaterialsFormatListNumbered.png) | ![MaterialsFormatListNumbered element](MaterialsFormatListNumbered.element.png) | ![MaterialsFormatListNumbered card](MaterialsFormatListNumbered.card.png) |
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

' loads the MaterialsFormatListNumbered element
include('elements/materials/Editor/MaterialsFormatListNumbered')
MaterialsFormatListNumbered('element', 'Format List Numbered', 'an optional tech field')
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

' loads the MaterialsFormatListNumbered element
include('elements/materials/Editor/MaterialsFormatListNumbered')
MaterialsFormatListNumbered('element', 'Format List Numbered', 'an optional tech field')
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

' loads the MaterialsFormatListNumbered card
include('elements/materials/Editor/MaterialsFormatListNumbered')
MaterialsFormatListNumberedCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsFormatListNumbered card
include('elements/materials/Editor/MaterialsFormatListNumbered')
MaterialsFormatListNumberedCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
