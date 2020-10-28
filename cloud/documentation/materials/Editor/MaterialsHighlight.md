# MaterialsHighlight
```text
elements/materials/Editor/MaterialsHighlight
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsHighlight icon](../../../icons/materials/Editor/MaterialsHighlight.png) | ![MaterialsHighlight element](MaterialsHighlight.element.png) | ![MaterialsHighlight card](MaterialsHighlight.card.png) |
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

' loads the MaterialsHighlight element
include('elements/materials/Editor/MaterialsHighlight')
MaterialsHighlight('element', 'Highlight', 'an optional tech field')
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

' loads the MaterialsHighlight element
include('elements/materials/Editor/MaterialsHighlight')
MaterialsHighlight('element', 'Highlight', 'an optional tech field')
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

' loads the MaterialsHighlight card
include('elements/materials/Editor/MaterialsHighlight')
MaterialsHighlightCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsHighlight card
include('elements/materials/Editor/MaterialsHighlight')
MaterialsHighlightCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
