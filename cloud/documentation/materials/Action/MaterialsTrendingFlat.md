# MaterialsTrendingFlat
```text
elements/materials/Action/MaterialsTrendingFlat
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsTrendingFlat icon](../../../icons/materials/Action/MaterialsTrendingFlat.png) | ![MaterialsTrendingFlat element](MaterialsTrendingFlat.element.png) | ![MaterialsTrendingFlat card](MaterialsTrendingFlat.card.png) |
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

' loads the MaterialsTrendingFlat element
include('elements/materials/Action/MaterialsTrendingFlat')
MaterialsTrendingFlat('element', 'Trending Flat', 'an optional tech field')
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

' loads the MaterialsTrendingFlat element
include('elements/materials/Action/MaterialsTrendingFlat')
MaterialsTrendingFlat('element', 'Trending Flat', 'an optional tech field')
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

' loads the MaterialsTrendingFlat card
include('elements/materials/Action/MaterialsTrendingFlat')
MaterialsTrendingFlatCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsTrendingFlat card
include('elements/materials/Action/MaterialsTrendingFlat')
MaterialsTrendingFlatCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
