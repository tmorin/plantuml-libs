# MaterialsFeaturedPlayList
```text
elements/materials/Av/MaterialsFeaturedPlayList
```
| Icon | Element | Card |
| :-: | :-: | --- |
| ![MaterialsFeaturedPlayList icon](../../../icons/materials/Av/MaterialsFeaturedPlayList.png) | ![MaterialsFeaturedPlayList element](MaterialsFeaturedPlayList.element.png) | ![MaterialsFeaturedPlayList card](MaterialsFeaturedPlayList.card.png) |
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

' loads the MaterialsFeaturedPlayList element
include('elements/materials/Av/MaterialsFeaturedPlayList')
MaterialsFeaturedPlayList('element', 'Featured Play List', 'an optional tech field')
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

' loads the MaterialsFeaturedPlayList element
include('elements/materials/Av/MaterialsFeaturedPlayList')
MaterialsFeaturedPlayList('element', 'Featured Play List', 'an optional tech field')
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

' loads the MaterialsFeaturedPlayList card
include('elements/materials/Av/MaterialsFeaturedPlayList')
MaterialsFeaturedPlayListCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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

' loads the MaterialsFeaturedPlayList card
include('elements/materials/Av/MaterialsFeaturedPlayList')
MaterialsFeaturedPlayListCard('card', 'an optional functional name', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
