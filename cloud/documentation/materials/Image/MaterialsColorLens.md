# MaterialsColorLens
```text
elements/materials/Image/MaterialsColorLens
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsColorLens icon](../../../icons/materials/Image/MaterialsColorLens.png) | ![MaterialsColorLens element](MaterialsColorLens.element.png) | ![MaterialsColorLens card](MaterialsColorLens.card.png) |
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

' loads the MaterialsColorLens element
include('elements/materials/Image/MaterialsColorLens')
MaterialsColorLens('element', 'Color Lens', 'an optional tech field')
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

' loads the MaterialsColorLens element
include('elements/materials/Image/MaterialsColorLens')
MaterialsColorLens('element', 'Color Lens', 'an optional tech field')
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

' loads the MaterialsColorLens card
include('elements/materials/Image/MaterialsColorLens')
MaterialsColorLensCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsColorLens card
include('elements/materials/Image/MaterialsColorLens')
MaterialsColorLensCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
