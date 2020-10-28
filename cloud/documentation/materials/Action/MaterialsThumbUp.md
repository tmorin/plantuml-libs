# MaterialsThumbUp
```text
elements/materials/Action/MaterialsThumbUp
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsThumbUp icon](../../../icons/materials/Action/MaterialsThumbUp.png) | ![MaterialsThumbUp element](MaterialsThumbUp.element.png) | ![MaterialsThumbUp card](MaterialsThumbUp.card.png) |
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

' loads the MaterialsThumbUp element
include('elements/materials/Action/MaterialsThumbUp')
MaterialsThumbUp('element', 'Thumb Up', 'an optional tech field')
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

' loads the MaterialsThumbUp element
include('elements/materials/Action/MaterialsThumbUp')
MaterialsThumbUp('element', 'Thumb Up', 'an optional tech field')
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

' loads the MaterialsThumbUp card
include('elements/materials/Action/MaterialsThumbUp')
MaterialsThumbUpCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsThumbUp card
include('elements/materials/Action/MaterialsThumbUp')
MaterialsThumbUpCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
