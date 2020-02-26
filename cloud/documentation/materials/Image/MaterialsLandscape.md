# MaterialsLandscape
```text
elements/materials/Image/MaterialsLandscape
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsLandscape icon](../../../icons/materials/Image/MaterialsLandscape.png) | ![MaterialsLandscape element](MaterialsLandscape.element.png) | ![MaterialsLandscape card](MaterialsLandscape.card.png) |
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

' loads the MaterialsLandscape element
include('elements/materials/Image/MaterialsLandscape')
MaterialsLandscape('element', 'Landscape', 'an optional tech field')
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

' loads the MaterialsLandscape element
include('elements/materials/Image/MaterialsLandscape')
MaterialsLandscape('element', 'Landscape', 'an optional tech field')
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

' loads the MaterialsLandscape card
include('elements/materials/Image/MaterialsLandscape')
MaterialsLandscapeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsLandscape card
include('elements/materials/Image/MaterialsLandscape')
MaterialsLandscapeCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
