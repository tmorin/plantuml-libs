# MaterialsRoundedCorner
```text
elements/materials/Action/MaterialsRoundedCorner
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsRoundedCorner icon](../../../icons/materials/Action/MaterialsRoundedCorner.png) | ![MaterialsRoundedCorner element](MaterialsRoundedCorner.element.png) | ![MaterialsRoundedCorner card](MaterialsRoundedCorner.card.png) |
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

' loads the MaterialsRoundedCorner element
include('elements/materials/Action/MaterialsRoundedCorner')
MaterialsRoundedCorner('element', 'Rounded Corner', 'an optional tech field')
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

' loads the MaterialsRoundedCorner element
include('elements/materials/Action/MaterialsRoundedCorner')
MaterialsRoundedCorner('element', 'Rounded Corner', 'an optional tech field')
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

' loads the MaterialsRoundedCorner card
include('elements/materials/Action/MaterialsRoundedCorner')
MaterialsRoundedCornerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsRoundedCorner card
include('elements/materials/Action/MaterialsRoundedCorner')
MaterialsRoundedCornerCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
