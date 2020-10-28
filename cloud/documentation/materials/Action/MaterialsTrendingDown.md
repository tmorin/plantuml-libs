# MaterialsTrendingDown
```text
elements/materials/Action/MaterialsTrendingDown
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsTrendingDown icon](../../../icons/materials/Action/MaterialsTrendingDown.png) | ![MaterialsTrendingDown element](MaterialsTrendingDown.element.png) | ![MaterialsTrendingDown card](MaterialsTrendingDown.card.png) |
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

' loads the MaterialsTrendingDown element
include('elements/materials/Action/MaterialsTrendingDown')
MaterialsTrendingDown('element', 'Trending Down', 'an optional tech field')
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

' loads the MaterialsTrendingDown element
include('elements/materials/Action/MaterialsTrendingDown')
MaterialsTrendingDown('element', 'Trending Down', 'an optional tech field')
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

' loads the MaterialsTrendingDown card
include('elements/materials/Action/MaterialsTrendingDown')
MaterialsTrendingDownCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsTrendingDown card
include('elements/materials/Action/MaterialsTrendingDown')
MaterialsTrendingDownCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
