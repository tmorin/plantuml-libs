# MaterialsTagFaces
```text
elements/materials/Image/MaterialsTagFaces
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsTagFaces icon](../../../icons/materials/Image/MaterialsTagFaces.png) | ![MaterialsTagFaces element](MaterialsTagFaces.element.png) | ![MaterialsTagFaces card](MaterialsTagFaces.card.png) |
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

' loads the MaterialsTagFaces element
include('elements/materials/Image/MaterialsTagFaces')
MaterialsTagFaces('element', 'Tag Faces', 'an optional tech field')
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

' loads the MaterialsTagFaces element
include('elements/materials/Image/MaterialsTagFaces')
MaterialsTagFaces('element', 'Tag Faces', 'an optional tech field')
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

' loads the MaterialsTagFaces card
include('elements/materials/Image/MaterialsTagFaces')
MaterialsTagFacesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsTagFaces card
include('elements/materials/Image/MaterialsTagFaces')
MaterialsTagFacesCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
