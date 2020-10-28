# MaterialsYoutubeSearchedFor
```text
elements/materials/Action/MaterialsYoutubeSearchedFor
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsYoutubeSearchedFor icon](../../../icons/materials/Action/MaterialsYoutubeSearchedFor.png) | ![MaterialsYoutubeSearchedFor element](MaterialsYoutubeSearchedFor.element.png) | ![MaterialsYoutubeSearchedFor card](MaterialsYoutubeSearchedFor.card.png) |
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

' loads the MaterialsYoutubeSearchedFor element
include('elements/materials/Action/MaterialsYoutubeSearchedFor')
MaterialsYoutubeSearchedFor('element', 'Youtube Searched For', 'an optional tech field')
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

' loads the MaterialsYoutubeSearchedFor element
include('elements/materials/Action/MaterialsYoutubeSearchedFor')
MaterialsYoutubeSearchedFor('element', 'Youtube Searched For', 'an optional tech field')
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

' loads the MaterialsYoutubeSearchedFor card
include('elements/materials/Action/MaterialsYoutubeSearchedFor')
MaterialsYoutubeSearchedForCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsYoutubeSearchedFor card
include('elements/materials/Action/MaterialsYoutubeSearchedFor')
MaterialsYoutubeSearchedForCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
