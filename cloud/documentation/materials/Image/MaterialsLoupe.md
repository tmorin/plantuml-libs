# MaterialsLoupe
```text
elements/materials/Image/MaterialsLoupe
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsLoupe icon](../../../icons/materials/Image/MaterialsLoupe.png) | ![MaterialsLoupe element](MaterialsLoupe.element.png) | ![MaterialsLoupe card](MaterialsLoupe.card.png) |
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

' loads the MaterialsLoupe element
include('elements/materials/Image/MaterialsLoupe')
MaterialsLoupe('element', 'Loupe', 'an optional tech field')
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

' loads the MaterialsLoupe element
include('elements/materials/Image/MaterialsLoupe')
MaterialsLoupe('element', 'Loupe', 'an optional tech field')
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

' loads the MaterialsLoupe card
include('elements/materials/Image/MaterialsLoupe')
MaterialsLoupeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsLoupe card
include('elements/materials/Image/MaterialsLoupe')
MaterialsLoupeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
