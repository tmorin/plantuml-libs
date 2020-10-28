# MaterialsVideoLibrary
```text
elements/materials/Av/MaterialsVideoLibrary
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsVideoLibrary icon](../../../icons/materials/Av/MaterialsVideoLibrary.png) | ![MaterialsVideoLibrary element](MaterialsVideoLibrary.element.png) | ![MaterialsVideoLibrary card](MaterialsVideoLibrary.card.png) |
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

' loads the MaterialsVideoLibrary element
include('elements/materials/Av/MaterialsVideoLibrary')
MaterialsVideoLibrary('element', 'Video Library', 'an optional tech field')
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

' loads the MaterialsVideoLibrary element
include('elements/materials/Av/MaterialsVideoLibrary')
MaterialsVideoLibrary('element', 'Video Library', 'an optional tech field')
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

' loads the MaterialsVideoLibrary card
include('elements/materials/Av/MaterialsVideoLibrary')
MaterialsVideoLibraryCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsVideoLibrary card
include('elements/materials/Av/MaterialsVideoLibrary')
MaterialsVideoLibraryCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
