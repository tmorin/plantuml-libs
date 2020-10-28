# MaterialsCrop54
```text
elements/materials/Image/MaterialsCrop54
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsCrop54 icon](../../../icons/materials/Image/MaterialsCrop54.png) | ![MaterialsCrop54 element](MaterialsCrop54.element.png) | ![MaterialsCrop54 card](MaterialsCrop54.card.png) |
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

' loads the MaterialsCrop54 element
include('elements/materials/Image/MaterialsCrop54')
MaterialsCrop54('element', 'Crop54', 'an optional tech field')
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

' loads the MaterialsCrop54 element
include('elements/materials/Image/MaterialsCrop54')
MaterialsCrop54('element', 'Crop54', 'an optional tech field')
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

' loads the MaterialsCrop54 card
include('elements/materials/Image/MaterialsCrop54')
MaterialsCrop54Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsCrop54 card
include('elements/materials/Image/MaterialsCrop54')
MaterialsCrop54Card('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
