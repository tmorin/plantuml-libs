# MaterialsFavorite
```text
elements/materials/Action/MaterialsFavorite
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsFavorite icon](../../../icons/materials/Action/MaterialsFavorite.png) | ![MaterialsFavorite element](MaterialsFavorite.element.png) | ![MaterialsFavorite card](MaterialsFavorite.card.png) |
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

' loads the MaterialsFavorite element
include('elements/materials/Action/MaterialsFavorite')
MaterialsFavorite('element', 'Favorite', 'an optional tech field')
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

' loads the MaterialsFavorite element
include('elements/materials/Action/MaterialsFavorite')
MaterialsFavorite('element', 'Favorite', 'an optional tech field')
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

' loads the MaterialsFavorite card
include('elements/materials/Action/MaterialsFavorite')
MaterialsFavoriteCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsFavorite card
include('elements/materials/Action/MaterialsFavorite')
MaterialsFavoriteCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
