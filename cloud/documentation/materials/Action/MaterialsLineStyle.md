# MaterialsLineStyle
```text
elements/materials/Action/MaterialsLineStyle
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsLineStyle icon](../../../icons/materials/Action/MaterialsLineStyle.png) | ![MaterialsLineStyle element](MaterialsLineStyle.element.png) | ![MaterialsLineStyle card](MaterialsLineStyle.card.png) |
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

' loads the MaterialsLineStyle element
include('elements/materials/Action/MaterialsLineStyle')
MaterialsLineStyle('element', 'Line Style', 'an optional tech field')
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

' loads the MaterialsLineStyle element
include('elements/materials/Action/MaterialsLineStyle')
MaterialsLineStyle('element', 'Line Style', 'an optional tech field')
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

' loads the MaterialsLineStyle card
include('elements/materials/Action/MaterialsLineStyle')
MaterialsLineStyleCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsLineStyle card
include('elements/materials/Action/MaterialsLineStyle')
MaterialsLineStyleCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
