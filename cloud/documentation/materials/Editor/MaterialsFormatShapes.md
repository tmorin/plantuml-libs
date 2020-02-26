# MaterialsFormatShapes
```text
elements/materials/Editor/MaterialsFormatShapes
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsFormatShapes icon](../../../icons/materials/Editor/MaterialsFormatShapes.png) | ![MaterialsFormatShapes element](MaterialsFormatShapes.element.png) | ![MaterialsFormatShapes card](MaterialsFormatShapes.card.png) |
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

' loads the MaterialsFormatShapes element
include('elements/materials/Editor/MaterialsFormatShapes')
MaterialsFormatShapes('element', 'Format Shapes', 'an optional tech field')
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

' loads the MaterialsFormatShapes element
include('elements/materials/Editor/MaterialsFormatShapes')
MaterialsFormatShapes('element', 'Format Shapes', 'an optional tech field')
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

' loads the MaterialsFormatShapes card
include('elements/materials/Editor/MaterialsFormatShapes')
MaterialsFormatShapesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsFormatShapes card
include('elements/materials/Editor/MaterialsFormatShapes')
MaterialsFormatShapesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
