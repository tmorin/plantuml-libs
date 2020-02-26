# MaterialsThumbDown
```text
elements/materials/Action/MaterialsThumbDown
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsThumbDown icon](../../../icons/materials/Action/MaterialsThumbDown.png) | ![MaterialsThumbDown element](MaterialsThumbDown.element.png) | ![MaterialsThumbDown card](MaterialsThumbDown.card.png) |
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

' loads the MaterialsThumbDown element
include('elements/materials/Action/MaterialsThumbDown')
MaterialsThumbDown('element', 'Thumb Down', 'an optional tech field')
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

' loads the MaterialsThumbDown element
include('elements/materials/Action/MaterialsThumbDown')
MaterialsThumbDown('element', 'Thumb Down', 'an optional tech field')
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

' loads the MaterialsThumbDown card
include('elements/materials/Action/MaterialsThumbDown')
MaterialsThumbDownCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsThumbDown card
include('elements/materials/Action/MaterialsThumbDown')
MaterialsThumbDownCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
